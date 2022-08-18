import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

//.......popups import
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditPlacePopup from "./AddPlacePopup";
// .......End of imports..........................

function App() {
  const [isCardOpen, setCardOpen] = useState(false);
  const [isAvatarOpen, setAvatarIsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isImagePopupOpen, setImagePopup] = useState(false);
  const [ currentUser, setCurentUser] = useState({})
  //.........end of states.......................................................................
 
  function getApiData() {
    api
      .getUserInfo()
      .then((profile) => {
        setCurentUser(profile);
      })
      .catch((profile) =>
        console.log("there is error in profile api", profile)
      );
  }
  useEffect(() => {
    getApiData();
  }, []);


  //.................end of userinfo call......................................................
 
  function handleCloseButtonClick() {
    setCardOpen(false);
    setAvatarIsOpen(false);
    setProfileOpen(false);
    setImagePopup(false);
  }
  //................ end Of Close Button.................................................

  //................preview.............................
  const [activeCard, setActiveCard] = useState({});
  function PreviewPopup() {
    return (
      <ImagePopup
        onOpen={isImagePopupOpen}
        onClose={handleCloseButtonClick}
        item={activeCard}
      />
    );
  }
  //..............CardLike..............................
  

  return (
    <div className="App">
     <CurrentUserContext.Provider value ={currentUser}>
      <Header />
      <Main
        setActiveCard={setActiveCard}
        setAvatarIsOpen={setAvatarIsOpen}
        setProfileOpen={setProfileOpen}
        setCardOpen={setCardOpen}
        setImagePopup={setImagePopup}
      />
      <Footer />
      <EditAvatarPopup isOpen={isAvatarOpen}
        onClose={handleCloseButtonClick}/>
      <EditProfilePopup isOpen= {isProfileOpen} onClose= {handleCloseButtonClick}/>
      <EditPlacePopup isOpen= {isCardOpen} onClose= {handleCloseButtonClick}/>
      <PreviewPopup />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
