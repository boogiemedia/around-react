import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  function handleChange(e){
  }
  return (
    <PopupWithForm
      name="profile-edditor"
      title="Edit profile"
      button="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        id="popup-input-type-name"
        className="popup__input popup__input_type_name"
        name="name"
        required
        minLength="2"
        maxLength="40"
        value={currentUser.name}
        onChange= {handleChange}
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
        value={currentUser.about}
      />
      <span
        className="popup__input-span"
        id="popup-input-type-description-error"
      ></span>
    </PopupWithForm>
  );
}
