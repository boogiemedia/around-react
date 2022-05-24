import React, { useState, useEffect } from "react";
import PopupWithForm from "../components/PopupWithForm";
import Card from "./Card";
import api from "../blocks/utils/api";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [callpPopup, setCallPopup] = useState("");
  const [userCards, setUserCards] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  async function getApiData() {
    const dataCards = await api.getCards();
    const dataProfile = await api.getProfile();
    setUserCards(dataCards);
    setUserProfile(dataProfile);
  }
  useEffect(() => {
    getApiData();
  }, []);

  async function popupOpener(ev) {
    ev.preventDefault();
    setCallPopup(ev.target.id);
    setIsOpen(!isOpen);
  }
  function HandleCloseButton() {
    setIsOpen(false);
  }
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-cover">
          <div
            id="change-profile-picture"
            onClick={popupOpener}
            className="profile__avatar-middle"
          ></div>
          <img
            src={userProfile.avatar}
            id="profile-avatar"
            alt="profile-avatar"
            className="profile__avatar"
          />
          <div className="profile__avatar-button"></div>
        </div>

        <div className="profile__info-block">
          <h1 className="profile__info">{userProfile.name}</h1>
          <button
            id="profile-edditor"
            onClick={popupOpener}
            type="button"
            className="profile__edit-button"
            aria-label="edit-button"
          ></button>
          <p className="profile__sub-info">{userProfile.about}</p>
        </div>

        <button
          id="card-editor"
          onClick={popupOpener}
          type="button"
          className="profile__add-button"
          aria-label="add-button"
        ></button>
      </section>
      <section className="elements">
        <PopupWithForm
          isOpen={isOpen}
          cssClassName={callpPopup}
          closePopUp={HandleCloseButton}
        />
        {userCards.map((ele) => {
          return <Card item={ele} />;
        })}
      </section>
    </main>
  );
}
