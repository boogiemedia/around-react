import React, {useState} from "react"



export default (props)=>{
  const [isOpen, setIsOpen] = useState(false);
    function HandleCardClick(){
        setIsOpen(!isOpen)
    }
    function HandleCloseButton() {
      setIsOpen(false);
    }
    const {name , link , likes } = props.item
    console.log(link)
    return(
      <>
        <div className="elements__block" onClick = {HandleCardClick}>
          <button className="elements__trash"></button>
          <div className="elements__cover" style={{backgroundImage: `url(${link})` }}></div>
          <h2 className="elements__title">{name}</h2>
          <div className="elements__like-box">
            <button type="button" class="elements__like"></button>
          <p className="elements__like-counter">{likes.length}</p>
          </div>
        </div>
            <div className={isOpen  ? `popup popup__preview popup_oppened` : `popup popup__preview`  }>  
            <div className="popup__preview-box">
              <button type="button" className="popup__close-button" aria-label="close-button" onClick={HandleCloseButton}></button>
              <img src= {link} alt={name} className="popup__preview"/>
              <p className="popup__preview-text">{name}</p>
            </div>
          </div>
        
    </>
    )
}