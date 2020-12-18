import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import '../assets/styles/components/HeaderVacancy.scss';

const HeaderVacancy = ({ isCoach }) => {
  const match = useRouteMatch('/vacancies/applied/:id');

  return (
    <div className="HeaderVacancy-container">
      {
        (isCoach && (match !== null)) && (
          <h1 className="HeaderVacancy-title">
            Aplicación del alumno XXXXXXX
          </h1>
        )
      }
      <div className="HeaderVacancy-sectionOne">
        <h2>Titulo de la vacante</h2>
        <h3>Nombre de la empresa</h3>
      </div>
      <div className="HeaderVacancy-sectionTwo">
        <div className="HeaderVacancy-sectionTwo-content">
          <p>Ciudad</p>
          <span className="HeaderVacancy-modality">
            remoto
          </span>
        </div>
        {
          !match && (
            <div className="HeaderVacancy-buttons">
              {
                isCoach ? (
                  <>
                    <button type="button">Aprobar</button>
                    <button type="button">Descartar</button>
                  </>
                ) : <button type="button">Aplicar</button>
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default HeaderVacancy;
