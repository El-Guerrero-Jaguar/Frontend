import React from 'react';

import '../assets/styles/containers/TableStatusVacancies.scss';

import VacaciesList from './VacaciesList';

const TableStatusVacancies = () => (
  <div className="TableStatusVacancies-container">
    <div className="TableStatusVacancies-header">
      <h2>Vacantes</h2>
      <h2>Estatus</h2>
    </div>
    <div className="TableStatusVacancies-content">
      <div className="TableStatusVacancies-content--left">
        <VacaciesList small />
      </div>
      <div className="TableStatusVacancies-content--right">
        <div className="TableStatusVacancies-statusItem">
          <p>Intro</p>
          <button type="button">Editar</button>
        </div>
      </div>
    </div>
  </div>
);

export default TableStatusVacancies;
