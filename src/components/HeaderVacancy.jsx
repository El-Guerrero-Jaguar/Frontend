import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import useModal from '../hooks/useModal';

import '../assets/styles/components/HeaderVacancy.scss';

import Modal from './Modal';

const HeaderVacancy = ({ isCoach }) => {
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
              isCoach ? (
                <>
                  <p>Form para publicar en forma la vacante</p>
                  <button type="button">Publicar la oferta</button>
                </>
              ) : (
                <>
                  <p>Mensaje para copiar y mandarselo a Shai</p>
                  <button type="button">Copiar mensaje</button>
                </>
              )
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
