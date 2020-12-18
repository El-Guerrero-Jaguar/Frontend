import React from 'react';
import { Link } from 'react-router-dom';
import withVacancies from '../hoc/withVacancies';

import '../assets/styles/containers/SidebarCoach.scss';

const SidebarItem = ({ vacant }) => (
  <Link className="SidebarCoach-item" to={`/vacancies/${vacant.id}`}>
    <p>{`${vacant.title}, ${vacant.company}`}</p>
    <p>{`(${vacant.country}, ${vacant.modality})`}</p>
  </Link>
);

const SidebarCoach = ({ vacancies }) => (
  <div className="SidebarCoach-container">
    {
      vacancies.map((vacant) => (<SidebarItem key={vacant.id} vacant={vacant} />))
    }
  </div>
);

export default withVacancies(SidebarCoach);
