import React from 'react';
import withVacancies from '../hoc/withVacancies';

import '../assets/styles/containers/TableStatusVacancies.scss';

import VacaciesList from './VacaciesList';

const TableStatusVacancies = ({ vacancies }) => (
  <div className="TableStatusVacancies-container">
    <div className="TableStatusVacancies-header">
      <h2>Vacantes</h2>
      <h2>Estatus</h2>
    </div>
    <div className="TableStatusVacancies-content">
      <VacaciesList vacancies={vacancies} small />
    </div>
  </div>
);

export default withVacancies(TableStatusVacancies);
