import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditPlacePopup from "./AddPlacePopup";
// .......End of imports.........................................................................................................

function App() {
  const [cards, setCards] = useState([]);
  const [isCardOpen, setCardOpen] = useState(false);
  const [isAvatarOpen, setAvatarIsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isImagePopupOpen, setImagePopup] = useState(false);
  const [currentUser, setCurentUser] = useState({});
  //.........end of states.......................................................................

  function getApiData() {
    api
      .getUserInfo()
      .then((profile) => {
        setCurentUser(profile);
      })
      .catch((profile) =>
        console.log("there is error in profile api", profile)
      );
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((cards) => console.log("there is error in cards api", cards));
  }

  useEffect(() => {
    getApiData();
  }, []);

  //.................end of userinfo call......................................................

  function handleCloseButtonClick() {
    setCardOpen(false);
    setAvatarIsOpen(false);
    setProfileOpen(false);
    setImagePopup(false);
  }
  //................ end Of Close Button.................................................

  function handleUpdateUser(info) {
    api
      .setUserInfo(info)
      .then((res) => setCurentUser(res))
      .then((res) => handleCloseButtonClick());
  }
  function handleUpdateAvatar(avatar) {
    api
      .changeAvatar(avatar)
      .then((res) => {
        setCurentUser(res);
      })
      .then(() => handleCloseButtonClick());
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    const removeLike = api.deleteLike(card._id).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
    const addLike = api.addLike(card._id).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
    //const changeLikeStatus = isLiked ? removeLike : addLike;
    console.log("test like", card);
  }
  function handleCardDelete(id) {
    api
      .deleteCard(id)
      .then((id) => {
        const newCards = cards.filter((card) => card._id !== id);
        setCards(newCards);
      })
      .catch((id) => console.log("there is error in deleting card", id));
  }
  function handleAddPlaceSubmit(newCard) {
    api.addNewCard(newCard).then((newCard) =>{setCards([newCard, ...cards]); }).then(() => handleCloseButtonClick()).catch((data)=>{console.log("there is an error in uploading photo")})
  }
  //................................End of Api calls..........................................
  //................preview.............................
  const [activeCard, setActiveCard] = useState({});
  function PreviewPopup() {
    return (
      <ImagePopup
        onOpen={isImagePopupOpen}
        onClose={handleCloseButtonClick}
        item={activeCard}
      />
    );
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          setActiveCard={setActiveCard}
          setAvatarIsOpen={setAvatarIsOpen}
          setProfileOpen={setProfileOpen}
          setCardOpen={setCardOpen}
          setImagePopup={setImagePopup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditAvatarPopup
          isOpen={isAvatarOpen}
          onClose={handleCloseButtonClick}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isProfileOpen}
          onClose={handleCloseButtonClick}
          onUpdateUser={handleUpdateUser}
        />
        <EditPlacePopup
          onAddPlace={handleAddPlaceSubmit}
          isOpen={isCardOpen}
          onClose={handleCloseButtonClick}
          onUpdateUser ={handleAddPlaceSubmit}
        />
        <PreviewPopup />
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
