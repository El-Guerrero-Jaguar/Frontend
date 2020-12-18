import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context';

import '../assets/styles/components/VacancyCard.scss';

const VacancyCard = ({ vacancy }) => {
  const [{ isCoach }] = useAppContext();

  const handleIntro = () => {
    console.log('Intro');
  };

  return (
    <Link className="VacancyCard-container" to={`/vacacies/${vacancy.id}`}>
      <h4 className="VacancyCard-title">{vacancy.title}</h4>
      <p className="VacancyCard-company">{vacancy.company}</p>
      <div className="VacancyCard-footer">
        <div className="VacancyCard-footer-content">
          <p>{vacancy.country}</p>
          <span className="VacancyCard-modality">
            {vacancy.modality}
          </span>
        </div>
        {
          !isCoach && (
            <div className="VacancyCard-footer-buttons">
              <button type="button" onClick={handleIntro}>Aplicar</button>
            </div>
          )
        }
      </div>
    </Link>
  );
};

export default VacancyCard;
