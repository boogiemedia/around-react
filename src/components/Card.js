import React, {useState} from "react"
import FuckMyLife from "./ImagePopup"
export default function Card(props){
 
 
  const [isOpen, setIsOpen] = useState(false);
    function HandleCardClick(){
        setIsOpen(!isOpen)
    }
    function HandleCloseButton() {
      setIsOpen(false);
    }
    function closePreview (){
      setIsOpen(false)
    }

    function openPreview(){
      setIsOpen(!isOpen)
    }
    const {name , link , likes } = props.item
    console.log(link)
    return(
      <>
        <div className="elements__block" onClick = {HandleCardClick}>
          <button className="elements__trash"></button>
          <div className="elements__cover" style={{backgroundImage: `url(${link})`  }} onclick= {openPreview}></div>
          <h2 className="elements__title">{name}</h2>
          <div className="elements__like-box">
            <button type="button" class="elements__like"></button>
          <p className="elements__like-counter">{likes.length}</p>
          </div>
        </div>
          <FuckMyLife  show={isOpen} name={name} link={link} closeButton = {closePreview} />
            
    </>
    )
}