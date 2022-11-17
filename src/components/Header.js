import React from "react";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__side-bar">
        <p className="header__side-bar__email">{props.email}</p>
      <p className="header__side-bar__link">{props.goTo}</p>
      </div>
    </header>
  );
}
