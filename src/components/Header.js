import React from "react";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__logo">{props.page}</div>
    </header>
  );
}
