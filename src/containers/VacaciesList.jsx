import React from 'react';
import useModal from '../hooks/useModal';

import '../assets/styles/containers/VacanciesList.scss';

import VacancyCard from '../components/VacancyCard';
import VacancyCardSmall from '../components/VacancyCardSmall';
import Modal from '../components/Modal';

const VacaciesList = ({ vacancies, small = false }) => {
  const [modal, handleModal] = useModal();

  return (
    <>
      {
        modal && (
          <Modal handleModal={handleModal}>
            <input type="text" placeholder="Cambiar estatus..." />
            <button type="button">Actualizar</button>
          </Modal>
        )
      }
      {
        vacancies.map((vacancy) => (
          small
            ? (
              <div key={vacancy.id} className="VacancyList-small">
                <VacancyCardSmall vacancy={vacancy} />
                <div className="VacancyList-status">
                  <p>Intro</p>
                  <button type="button" onClick={handleModal}>Editar</button>
                </div>
              </div>
            ) : <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))
      }
    </>
  );
};

export default VacaciesList;
