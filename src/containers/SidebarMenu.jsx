import React from 'react';
import { NavLink } from 'react-router-dom';

function SidebarMenu() {
  return (
    <div className="sidebarmenu_container">
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active" exact>Vacantes</NavLink></li>
          <li><NavLink to="/vacancies/applied/" activeClassName="active" exact>Mis aplicaciones</NavLink></li>
          <li><NavLink to="/profile/">Perfil</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default SidebarMenu;
