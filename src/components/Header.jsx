import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context';

import '../assets/styles/_header.scss';

import logo from '../assets/statics/logoPlatzimasterDark.png';
import profile from '../assets/statics/profile.svg';

const Header = () => {
  const [{ isCoach }, dispatch] = useAppContext();

  const handleUser = () => {
    dispatch({
      type: 'CHANGE_USER',
    });
  };

  return (
    <header className="Header-container">
      <Link to="/">
        <img className="Header-logo" src={logo} alt="Logo" />
      </Link>
      <div className="Header-user" onClick={handleUser} onKeyUp={handleUser} role="button" tabIndex={0}>
        <img src={profile} alt="User" />
        <h1>{isCoach ? 'TPCoach' : 'Student'}</h1>
      </div>
    </header>
  );
};

export default Header;
