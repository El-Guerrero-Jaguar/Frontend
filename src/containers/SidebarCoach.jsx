import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import withVacancies from '../hoc/withVacancies';

import '../assets/styles/containers/SidebarCoach.scss';

import IconBack from '../assets/statics/back.svg';

const SidebarItem = ({ vacant }) => (
  <Link className="SidebarCoach-item" to={`/vacancies/${vacant.id}`}>
    <p>{`${vacant.title}, ${vacant.company}`}</p>
    <p>{`(${vacant.town}, ${vacant.modality})`}</p>
  </Link>
);

const SidebarCoach = ({ vacancies }) => {
  const { goBack } = useHistory();

  return (
    <div className="SidebarCoach-container">
      <div className="SidebarCoach-back">
        <button type="button" onClick={() => goBack()}>
          <img src={IconBack} alt="Back" />
          {' '}
          Regresar
        </button>
      </div>
      {
        vacancies.map((vacant) => (<SidebarItem key={vacant.id} vacant={vacant} />))
      }
    </div>
  );
};

export default withVacancies(SidebarCoach);
