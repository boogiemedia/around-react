import React from "react";
import PopupWithForm from "./PopupWithForm";
export default function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="change-avatar"
      title="Change profile picture"
      button="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
