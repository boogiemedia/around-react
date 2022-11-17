import React from 'react';
export default function LoginSignup(props) {
  return (
    <form className='auth-form' method='post' >
      <h3 className='auth-form__title'>{props.title}</h3>
      <input
        type='email'
        className='auth-form__input auth-form__input_type_email'
        id='auth-form-input-type-description' placeholder='email'
      />
      <input
        type='password'
        className='auth-form__input auth-form__input_type_password'
        id='auth-form-input-type-description' placeholder='password'
      />
      <button className='auth-form__button' type='submit'>
      {props.title}
      </button>
      <p className='auth-form__footer-title'>Not a member yet? sign up here!</p>
    </form>
  );
}
