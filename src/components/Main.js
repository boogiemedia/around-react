import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext)
  //..api states..............................
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState([])

  //..Get Cards Api.........
  function getApiData() {
    //......Cards info
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((cards) => console.log("there is error in cards api", cards));
    //......Get Profile Info
  }
  useEffect(() => {
    getApiData();
  }, []);

  //........................End of api..........................

  function handleEditAvatarClick() {
    props.setAvatarIsOpen(true);
  }
  function handleEditProfileClick() {
    props.setProfileOpen(true);
  }
  function handleAddPlaceClick() {
    props.setCardOpen(true);
  }
  function handleCardLike(){
    const isLiked = card.likes //.some(user => user._id === currentUser._id);
    console.log("test", isLiked)
    //const isLiked = cards.likes.some(user => user._id === currentUser._id);
   // isLiked ? api.deleteLike(card._Id) :
  }
  //.......................................end Of handlers.............

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-cover">
          <div
            id="change-profile-picture"
            onClick={handleEditAvatarClick}
            className="profile__avatar-middle"
          ></div>
          <img
            src={currentUser.avatar}
            id="profile-avatar"
            alt="profile-avatar"
            className="profile__avatar"
          />
          <div className="profile__avatar-button"></div>
        </div>

        <div className="profile__info-block">
          <h1 className="profile__info">{currentUser.name}</h1>
          <button
            id="profile-edditor"
            onClick={handleEditProfileClick}
            type="button"
            className="profile__edit-button"
            aria-label="edit-button"
          ></button>
          <p className="profile__sub-info">{currentUser.about}</p>
        </div>

        <button
          id="card-editor"
          onClick={handleAddPlaceClick}
          type="button"
          className="profile__add-button"
          aria-label="add-button"
        ></button>
      </section>
      <section className="elements">
        {cards.map((data) => {
          return (
            <Card
              key={data._id}
              item={data}
              click={props.setImagePopup}
              setActiveCard={props.setActiveCard}
              card ={setCard}
              onCardLike= {handleCardLike}
            />
          );
        })}
      </section>
    </main>
  );
}
