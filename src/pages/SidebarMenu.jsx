import React from 'react';
import { useAppContext } from '../context';

const SidebarMenu = () => {
  const [{ isCoach }] = useAppContext();
  return (
      <div className="sidebarmenu_container">
        <h1> Usuario </h1>
      </div>
  );
};

export default SidebarMenu;