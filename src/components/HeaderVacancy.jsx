import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import useModal from '../hooks/useModal';

import '../assets/styles/components/HeaderVacancy.scss';

import Modal from './Modal';
import HeaderVacancyForm from './HeaderVacancyForm';
import HeaderVacancyMessage from './HeaderVacancyMessage';

const HeaderVacancy = ({ isCoach, vacancy }) => {
  const match = useRouteMatch('/vacancies/applied/:id');
  const [modal, handleModal] = useModal();

  const handleDiscart = () => {
    console.log('Descartado');
  };

  return (
    <>
      {
        modal && (
          <Modal handleModal={handleModal}>
            {
              isCoach ? <HeaderVacancyForm vacancy={vacancy} /> : <HeaderVacancyMessage />
            }
          </Modal>
        )
      }
      <div className="HeaderVacancy-container">
        {
          (isCoach && (match !== null)) && (
            <h1 className="HeaderVacancy-title">
              Aplicación del alumno XXXXXXX
            </h1>
          )
        }
        <div className="HeaderVacancy-sectionOne">
          <h2>{vacancy.title}</h2>
          <h3>{vacancy.company}</h3>
        </div>
        <div className="HeaderVacancy-sectionTwo">
          <div className="HeaderVacancy-sectionTwo-content">
            <p>{vacancy.town}</p>
            <span className="HeaderVacancy-modality">
              {vacancy.modality}
            </span>
          </div>
          {
            !match && (
              <div className="HeaderVacancy-buttons">
                {
                  isCoach ? (
                    <>
                      <button type="button" className="ok" onClick={handleModal}>Aprobar</button>
                      <button type="button" onClick={handleDiscart}>Descartar</button>
                    </>
                  ) : <button type="button" className="ok" onClick={handleModal}>Aplicar</button>
                }
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default HeaderVacancy;
