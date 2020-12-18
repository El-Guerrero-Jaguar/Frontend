import React from 'react';
import withVacancies from '../hoc/withVacancies';
import VacancyCard from '../components/VacancyCard';
import VacancyCardSmall from '../components/VacancyCardSmall';

const VacaciesList = ({ vacancies, small = false }) => (
  <>
    {
      vacancies.map((vacancy) => (
        small
          ? <VacancyCardSmall key={vacancy.id} vacancy={vacancy} />
          : <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))
    }
  </>
);

export default withVacancies(VacaciesList);
