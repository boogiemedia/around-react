import React from "react";
export default function PopupWithForm(props) {
  return(
  <>
    <div
      className={
        props.isOpen
          ? `popup popup_type_${props.name} popup_oppened`
          : `popup popup_type_${props.name}`
      }
    >
      <form method="post" name={props.name} className="popup__form">
        <button onClick={props.isClose}
          type="button"
          className="popup__close-button"
          aria-label="close-button"
        ></button>
        <h3 className="popup__title">{props.title}</h3>
        <div>{props.children}</div>
        <button className="popup__save-button" type="submit">
          {props.button}
        </button>
      </form>
    </div>

    {/* <div  className={props.isOpen   && props.cssClassName == "profile-edditor" ?  `popup popup_type_${props.cssClassName} popup_oppened` : `popup popup_type_${props.profileClassName}`  }>
    <form method="post" name="ProfileForm" className="popup__form ">
      <button type="button" className="popup__close-button" aria-label="close-button" onClick={props.closePopUp}></button>
      <h3 className="popup__title">Edit profile</h3>
      <input id="popup-input-type-name" className="poppopup_oppenedup__input popup__input_type_name" name="name" required minLength="2"
        maxLength="40" />
      <span className="popup__input-span" id="popup-input-type-name-error"></span>
      <input id="popup-input-type-description" className=" popup__input popup__input_type_description" name="about"
        required minLength="2" maxLength="200" />
      <span className="popup__input-span" id="popup-input-type-description-error"></span>
      <button className=" popup__save-button" type="submit">Save</button>
    </form>
  </div>
  <div className={props.isOpen   && props.cssClassName == "card-editor" ?  `popup popup_type_${props.cssClassName} popup_oppened`: `popup popup_type_${props.cssClassName}`}>
    <form method="post" name="ProfileForm" className="popup__form" id="form">
      <button type="button" className="popup__close-button" aria-label="close-button" onClick={props.closePopUp}></button>
      <h3 className="popup__title">Edit Card</h3>
      <input id="popup-input-type-title" className="popup__input popup__input_type_title" name="name" placeholder="Title"
        required minLength="2" maxLength="40" />
      <span className="popup__input-span" id="popup-input-type-title-error"></span>
      <input type="url" id="popup-input-type-url" className="popup__input popup__input_type_link" name="link"
        placeholder="image link" required />
      <span className="popup__input-span" id="popup-input-type-url-error"></span>
      <button className="popup__save-button popup__save-button_disabled" type="submit">Create</button>
    </form>
  </div>


  <div className="popup popup_type_delete-card">
    <form method="post" className="popup__form popup__form_type_delete" id="delete-form">
    <button type="button" className="popup__close-button" aria-label="close-button"></button>
   <h3 className="popup__title popup__title_type_delete">Are you sure?</h3>
   <button className="popup__save-button" type="submit">Yes</button>
  </form>
  </div>
  
  <div className= {props.isOpen  && props.cssClassName == "change-profile-picture" ? `popup popup_type_${props.cssClassName} popup_oppened` : `popup popup_type_${props.popupName}`  }   >
    <form method="post" name="changeprofilepictureform" className="popup__form popup__form_type_change-avatar" id="profile-form">
      <button type="button" className="popup__close-button" aria-label="close-button" onClick={props.closePopUp}></button>
      <h3 className="popup__title">Change profile picture</h3>
      <input type="url" id="poppup-input-type-url" className="popup__input popup__input_type_link" name="avatar"
        placeholder="image link" required />
      <span className="popup__input-span" id="popup-input-type-url-error-picture-changer"></span>
      <button className="popup__save-button popup__save-button_disabled" type="submit">save</button>
    </form>
  </div> */}
  </>)
}
