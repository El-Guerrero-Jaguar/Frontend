import React from 'react';
import { useAppContext } from '../context';

const VacanciesApplied = () => {
  const [{ isCoach }] = useAppContext();

  return (
    <h1>{ isCoach ? 'Vacantes del lado del coach' : 'Vacantes del lado del alumno'}</h1>
  );
};

export default VacanciesApplied;
