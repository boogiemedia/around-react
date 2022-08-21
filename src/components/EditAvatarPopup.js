import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";
export default function EditAvatarPopup(props) {
  const avatarNewImg = useRef("hello")

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarNewImg.current.value,
    });
  } 
  return (
    <PopupWithForm
      name="change-avatar"
      title="Change profile picture"
      button="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit ={handleSubmit}
      onChange = {e=>avatarNewImg (e.target.value)}
    
    >
      <input
       ref ={avatarNewImg}
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
