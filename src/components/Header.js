import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className='header'>
      <div className='header__logo'></div>
      <div className='header__side-bar'>
        <p className='header__side-bar__email'>{props.email}</p>
        <Link to = {props.link} className='header__side-bar__link'>{props.goTo}</Link>
      </div>
    </header>
  );
}
