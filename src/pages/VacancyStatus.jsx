import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context';
import useGetVacancy from '../hooks/useGetVacancy';

import HeaderVacancy from '../components/HeaderVacancy';

const VacancyStatus = () => {
  const [{ isCoach }] = useAppContext();
  const { id } = useParams();
  const [vacancy, loading] = useGetVacancy(id);

  console.log(vacancy);
  console.log(loading);

  return (
    <>
      <HeaderVacancy isCoach={isCoach} vacancy={vacancy} />
      <div className="Vacancy-description" dangerouslySetInnerHTML={{ __html: vacancy.description }} />
    </>
  );
};

export default VacancyStatus;
