import React, { useState } from "react";
import PopupWithForm from "../components/PopupWithForm";
import Card from "./Card";

export default function Main(props) {
  const [isCardOpen, setCardOpen] = useState(false);
  const [isAvatarOpen, setAvatarIsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  function HandleEditAvatarClick() {
    setAvatarIsOpen(true);
  }
  function handleEditProfileClick() {
    setProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setCardOpen(true);
  }
  //.......................................end Of states.............

  function HandleCloseButtonClick() {
    setCardOpen(false);
    setAvatarIsOpen(false);
    setProfileOpen(false);
  }
  //................ end Of Close Butt
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
          className="poppopup_oppenedup__input popup__input_type_name"
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
          class="popup__input popup__input_type_title"
          name="name"
          placeholder="Title"
          required
          minlength="2"
          maxlength="40"
        />

        <span
          class="popup__input-span"
          id="popup-input-type-title-error"
        ></span>

        <input
          type="url"
          id="popup-input-type-url"
          class="popup__input popup__input_type_link"
          name="link"
          placeholder="image link"
          required
        />

        <span class="popup__input-span" id="popup-input-type-url-error"></span>
      </PopupWithForm>
    );
  }
//.........................End Of Popups.........................................

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
          return <Card item={e} />;
        })}
      </section>
      <AvatarPopup />
      <ProfilePopup />
      <EditPlacePopup />
    </main>
  );
}
