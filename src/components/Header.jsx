import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/_header.scss';

import logo from '../assets/statics/logoPlatzimaster.png';
import profile from '../assets/statics/profile.png';

const Header = () => (
  <header className="Header-container">
    <Link to="/">
      <img className="Header-logo" src={logo} alt="Logo" />
    </Link>
    <div className="Header-user">
      <img src={profile} alt="User" />
      <h1> Usuario </h1>
    </div>
  </header>
);

export default Header;
