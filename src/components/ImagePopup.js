import React from "react";
export default function ImagePopup(props) {
  return (
    <div
      className={
        props.show
          ? `popup popup__preview popup_oppened`
          : `popup popup__preview`
      }
    >
      <div className="popup__preview-box">
        <button
          type="button"
          className="popup__close-button"
          aria-label="close-button"
          onClick={props.closeButton}
        ></button>
        <img src={props.link} alt={props.name} className="popup__preview" />
        <p className="popup__preview-text">{props.name}</p>
      </div>
    </div>
  );
}
