import React from 'react';

import '../assets/styles/containers/VacanciesList.scss';

import VacancyCard from '../components/VacancyCard';
import VacancyCardSmall from '../components/VacancyCardSmall';

const VacaciesList = ({ vacancies, small = false }) => (
  <>
    {
      vacancies.map((vacancy) => (
        small
          ? (
            <div key={vacancy.id} className="VacancyList-small">
              <VacancyCardSmall vacancy={vacancy} />
              <div className="VacancyList-status">
                <p>Intro</p>
                <button type="button">Editar</button>
              </div>
            </div>
          ) : <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))
    }
  </>
);

export default VacaciesList;
