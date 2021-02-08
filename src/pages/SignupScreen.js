import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignupScreen.css';

const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign Up</h1>
        <input ref={emailRef} type='email' placeholder='Email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
        <button type='submit' onClick={register}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupScreen;
