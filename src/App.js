import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import PopupWithForm from './components/PopupWithForm';
function App() {
  return (
    <div className="App">
    <Header />
    <Main />
    <Footer />
    {/* <PopupWithForm /> */}
  <template className="elements__template">
    <div className="elements__block">
      <button className="elements__trash"></button>
      <div className="elements__cover"></div>
      <h2 className="elements__title"></h2>
      <div className="elements__like-box">
        <button type="button" className="elements__like"></button>
      <p className="elements__like-counter"></p>
      </div>
      
    </div>
  </template>
  <script type="module" src="./index.js"></script>

    </div>
  );
}

export default App;
