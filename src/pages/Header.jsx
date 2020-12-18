import React from 'react';
import { useAppContext } from '../context';
// import '../assets/styles/_header.scss'

const Header = () => {
  const [{ isCoach }] = useAppContext();
  return (
      <div className="container_Header">
        <h1> Usuario </h1>
      </div>
  );
};

export default Header;