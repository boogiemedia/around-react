import React, { useState } from "react";
import ImagePopup from "./ImagePopup";
export default function Card(props) {
  const [isOpen, setIsOpen] = useState(false);

  function closePreview() {
    setIsOpen(false);
  }

  function handleCardClick() {
    setIsOpen(!isOpen);
  }
  const { name, link, likes } = 
  props.item;
  return (
    <>
      <div className="elements__block" >
        <button className="elements__trash"></button>
        <div
          className="elements__cover"
          style={{ backgroundImage: `url(${link})` }}
          onClick={handleCardClick}
        ></div>
        <h2 className="elements__title">{name}</h2>
        <div className="elements__like-box">
          <button type="button" className="elements__like"></button>
          <p className="elements__like-counter">{likes.length}</p>
        </div>
      </div>
      <ImagePopup
        show={isOpen}
        name={name}
        link={link}
        closeButton={closePreview}
      />
    </>
  );
}
