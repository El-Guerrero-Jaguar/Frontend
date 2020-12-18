import React from 'react';
import withVacancies from '../hoc/withVacancies';
import VacancyCard from '../components/VacancyCard';

const VacaciesList = ({ vacancies }) => (
  <>
    {
      vacancies.map((vacancy) => (<VacancyCard key={vacancy.id} vacancy={vacancy} />))
    }
  </>
);

export default withVacancies(VacaciesList);
