import React from "react";
import Card from "./Card";

export default function Main(props) {
 
  function HandleEditAvatarClick() {
    props.setAvatarIsOpen(true);
  }
  function handleEditProfileClick() {
    props.setProfileOpen(true);
  }
  function handleAddPlaceClick() {
    props.setCardOpen(true);
  }
  //.......................................end Of states.............

  

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-cover">
          <div
            id="change-profile-picture"
            onClick={HandleEditAvatarClick}
            className="profile__avatar-middle"
          ></div>
          <img
            src={props.userProfile.avatar}
            id="profile-avatar"
            alt="profile-avatar"
            className="profile__avatar"
          />
          <div className="profile__avatar-button"></div>
        </div>

        <div className="profile__info-block">
          <h1 className="profile__info">{props.userProfile.name}</h1>
          <button
            id="profile-edditor"
            onClick={handleEditProfileClick}
            type="button"
            className="profile__edit-button"
            aria-label="edit-button"
          ></button>
          <p className="profile__sub-info">{props.userProfile.about}</p>
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
        {props.dataCards.map((e) => {
          return <Card item={e} click ={props.setImagePopup} setActiveCard = {props.setActiveCard}/>
      
        })}
      </section>
     
    </main>
  );
}
