import React, { useEffect, useState } from "react";
import api from "../blocks/utils/api";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

// .......End of imports..........................

function App() {
  //..api states..............................
  const [Cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState({})
  const [userProfile, setUserProfile] = useState({});

  //..get api........................................
  async function getApiData() {
    const dataCards = await api
      .getCards()
      .catch((res) => console.log("there is error in rendering cards", res));
    const dataProfile = await api
      .getProfile()
      .catch((res) => console.log("there is error in rendering info", res));
    setCards(dataCards);
    setUserProfile(dataProfile);
  }
  useEffect(() => {
    getApiData();
  }, []);
  //...................................end of api............................................................
  const [isCardOpen, setCardOpen] = useState(false);
  const [isAvatarOpen, setAvatarIsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isImagePopupOpen, setImagePopup] = useState(false)
  //.........end of states.......................................................................
  function HandleCloseButtonClick() {
    setCardOpen(false);
    setAvatarIsOpen(false);
    setProfileOpen(false);
    setImagePopup(false)
  }
  //................ end Of Close Button.................................................

  //................preview.............................
  function PreviewPopup(){
    return(
      <ImagePopup 
      isOpen= {isImagePopupOpen}
      isClose= {HandleCloseButtonClick}
      item = {activeCard}
      />
    )
  }
  //.............Avatar-Popup.....................................
  function AvatarPopup() {
    return (
      <PopupWithForm
        name="change-avatar"
        title="Change profile picture"
        button="Save"
        isOpen={isAvatarOpen}
        isClose={HandleCloseButtonClick}
      >
        <input
          type="url"
          id="poppup-input-type-url"
          className="popup__input popup__input_type_link"
          name="avatar"
          placeholder="image link"
          required
        />
        <span
          className="popup__input-span"
          id="popup-input-type-url-error-picture-changer"
        ></span>
      </PopupWithForm>
    );
  }
  //...........Profile-Popup.............................................................
  function ProfilePopup() {
    return (
      <PopupWithForm
        name="profile-edditor"
        title="Edit profile"
        button="Save"
        isOpen={isProfileOpen}
        isClose={HandleCloseButtonClick}
      >
        <input
          id="popup-input-type-name"
          className="popup__input popup__input_type_name"
          name="name"
          required
          minLength="2"
          maxLength="40"
        />
        <span
          className="popup__input-span"
          id="popup-input-type-name-error"
        ></span>
        <input
          id="popup-input-type-description"
          className=" popup__input popup__input_type_description"
          name="about"
          required
          minLength="2"
          maxLength="200"
        />
        <span
          className="popup__input-span"
          id="popup-input-type-description-error"
        ></span>
      </PopupWithForm>
    );
  }
  //......Edit-place-popup................................................
  function EditPlacePopup() {
    return (
      <PopupWithForm
        name="card-editor"
        title="Edit card"
        button="Save"
        isOpen={isCardOpen}
        isClose={HandleCloseButtonClick}
      >
        <input
          id="popup-input-type-title"
          className="popup__input popup__input_type_title"
          name="name"
          placeholder="Title"
          required
          minLength="2"
          maxLength="40"
        />

        <span
          className="popup__input-span"
          id="popup-input-type-title-error"
        ></span>

        <input
          type="url"
          id="popup-input-type-url"
          className="popup__input popup__input_type_link"
          name="link"
          placeholder="image link"
          required
        />

        <span className="popup__input-span" id="popup-input-type-url-error"></span>
      </PopupWithForm>
    );
  }
  //.........................End Of Popups.........................................

  return (
    <div className="App">
      <Header />
      <Main
        dataCards={Cards}
        userProfile={userProfile}
        setActiveCard = {setActiveCard}
        setAvatarIsOpen={setAvatarIsOpen}
        setProfileOpen={setProfileOpen}
        setCardOpen={setCardOpen}
        setImagePopup= {setImagePopup}
      />
      <Footer />
      <AvatarPopup />
      <ProfilePopup />
      <EditPlacePopup />
      <PreviewPopup />
    </div>
  );
}

export default App;
