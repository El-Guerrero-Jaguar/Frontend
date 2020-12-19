import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/VacancyCard.scss';

const VacancyCardSmall = ({ vacancy }) => (
  <Link className="VacancyCard-container-small" to={`/vacancies/applied/${vacancy.id}`}>
    <h4 className="VacancyCard-title">{vacancy.title}</h4>
    <span className="VacancyCard-modality">
      {vacancy.modality}
    </span>
  </Link>
);

export default VacancyCardSmall;
