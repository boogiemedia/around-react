import React from "react";

export default function Card(props) {
  const { name, link, likes} = props.item;

  function handleCardClick() {
    props.click(true);
    props.setActiveCard(props.item);
  }
  return (
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
  );
}
