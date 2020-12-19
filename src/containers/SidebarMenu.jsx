import React from 'react';
import { NavLink } from 'react-router-dom';

import IconVacancies from '../assets/statics/vacancies.svg';
import IconVacanciesApplied from '../assets/statics/vacanciesApplied.svg';
import IconProfile from '../assets/statics/profile.svg';

function SidebarMenu() {
  return (
    <div className="sidebarmenu_container">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              <img src={IconVacancies} alt="Icon vacancies" />
              Vacantes
            </NavLink>
          </li>
          <li>
            <NavLink to="/vacancies/applied/" activeClassName="active" exact>
              <img src={IconVacanciesApplied} alt="Icon vacancies applied" />
              Mis aplicaciones
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/">
              <img src={IconProfile} alt="Icon profile" />
              Perfil
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SidebarMenu;
