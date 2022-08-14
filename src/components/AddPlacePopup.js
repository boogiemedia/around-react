import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditPlacePopup(props) {
  return (
    <PopupWithForm
      name="card-editor"
      title="Edit card"
      button="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
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

      <span
        className="popup__input-span"
        id="popup-input-type-url-error"
      ></span>
    </PopupWithForm>
  );
}
