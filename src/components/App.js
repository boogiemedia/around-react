
import React, {useEffect, useState} from 'react';
import api from "../blocks/utils/api";
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';


// .......End of imports..........................

function App() {
 //..api states..............................
  const [userCards, setUserCards] = useState([]);
  const [userProfile, setUserProfile] = useState({});

//..get api........................................
  async function getApiData() {
    const dataCards = await api.getCards()
    .catch((res) => console.log("there is error in rendering cards", res ));
    const dataProfile = await api.getProfile()
    .catch((res) => console.log("there is error in rendering info", res ));
    setUserCards(dataCards);
    setUserProfile(dataProfile);
  }
  useEffect(() => {
    getApiData();
  }, []);
  //...................................end of api............................................................



  return (

    
    
    <div className="App">
    <Header />
    <Main  dataCards ={userCards} userProfile={userProfile} />
    <Footer />
    
    <ImagePopup />
    
    </div>
  );
}

export default App;
