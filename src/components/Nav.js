import React, { useEffect, useState } from 'react';
import netflixLogo from '../images/netflix.png';
// import netflixAvatar from '../images/avatar.png';
import './Nav.css';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

const Nav = () => {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 80) {
      handleShow(true);
    } else handleShow(false);
  };
  const history = useHistory();

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => {
      window.removeEventListener('scroll', transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        onClick={() => history.push('/')}
        className='nav_logo'
        src={netflixLogo}
        alt='Logo'
      />

      <Avatar
        alt='Profile'
        src=''
        className='nav_avatar'
        onClick={() => history.push('/profile')}
      />
    </div>
  );
};

export default Nav;
