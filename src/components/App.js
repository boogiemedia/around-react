import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <header class="header">
    <div class="header__logo"></div>
  </header>
  <main class="main">
    <section class="profile">
      <div class="profile__avatar-cover">
        <div class="profile__avatar-middle"></div>
        <img id="profile-avatar" alt="profile-avatar" class="profile__avatar" />
        <div class="profile__avatar-button"></div>
      </div>
  
      <div class="profile__info-block">
        <h1 class="profile__info">Jacques Cousteau</h1>
        <button type="button" class="profile__edit-button" aria-label="edit-button"></button>
        <p class="profile__sub-info">Explorer</p>
      </div>
      <button type="button" class="profile__add-button" aria-label="add-button"></button>
    </section>
    <section class="elements">


    </section>
  </main>
  <footer class="footer">
    <p class="footer__title">© 2021 Around The U.S.</p>
  </footer>
  <div class="popup popup_type_profile-edditor">
    <form method="post" name="ProfileForm" class="popup__form">
      <button type="button" class="popup__close-button" aria-label="close-button"></button>
      <h3 class="popup__title">Edit profile</h3>
      <input id="popup-input-type-name" class="popup__input popup__input_type_name" name="name" required minlength="2"
        maxlength="40" />
      <span class="popup__input-span" id="popup-input-type-name-error"></span>
      <input id="popup-input-type-description" class=" popup__input popup__input_type_description" name="about"
        required minlength="2" maxlength="200" />
      <span class="popup__input-span" id="popup-input-type-description-error"></span>
      <button class=" popup__save-button" type="submit">Save</button>
    </form>
  </div>
  <div class="popup popup_type_card-editor">
    <form method="post" name="ProfileForm" class="popup__form" id="form">
      <button type="button" class="popup__close-button" aria-label="close-button"></button>
      <h3 class="popup__title">Edit Card</h3>
      <input id="popup-input-type-title" class="popup__input popup__input_type_title" name="name" placeholder="Title"
        required minlength="2" maxlength="40" />
      <span class="popup__input-span" id="popup-input-type-title-error"></span>
      <input type="url" id="popup-input-type-url" class="popup__input popup__input_type_link" name="link"
        placeholder="image link" required />
      <span class="popup__input-span" id="popup-input-type-url-error"></span>
      <button class="popup__save-button popup__save-button_disabled" type="submit">Create</button>
    </form>
  </div>
  <div class="popup popup_type_preview">  
    <div class="popup__preview-box">
      <button type="button" class="popup__close-button" aria-label="close-button"></button>
      <img src=" " alt="placeholder" class="popup__preview"/>
      <p class="popup__preview-text"></p>
    </div>
  </div>

  <div class="popup popup_type_delete-card">
    <form method="post" class="popup__form popup__form_type_delete" id="delete-form">
    <button type="button" class="popup__close-button" aria-label="close-button"></button>
   <h3 class="popup__title popup__title_type_delete">Are you sure?</h3>
   <button class="popup__save-button" type="submit">Yes</button>
  </form>
  </div>
  <div class="popup popup_type_change-profile-picture">
    <form method="post" name="changeprofilepictureform" class="popup__form popup__form_type_change-avatar" id="profile-form">
      <button type="button" class="popup__close-button" aria-label="close-button"></button>
      <h3 class="popup__title">Change profile picture</h3>
      <input type="url" id="poppup-input-type-url" class="popup__input popup__input_type_link" name="avatar"
        placeholder="image link" required />
      <span class="popup__input-span" id="popup-input-type-url-error-picture-changer"></span>
      <button class="popup__save-button popup__save-button_disabled" type="submit">save</button>
    </form>
  </div>
  <template class="elements__template">
    <div class="elements__block">
      <button class="elements__trash"></button>
      <div class="elements__cover"></div>
      <h2 class="elements__title"></h2>
      <div class="elements__like-box">
        <button type="button" class="elements__like"></button>
      <p class="elements__like-counter"></p>
      </div>
      
    </div>
  </template>
  <script type="module" src="./index.js"></script>

    </div>
  );
}

export default App;
