import React from 'react';
import { useAppContext } from '../context';

const VacancyStatus = () => {
  const [{ isCoach }] = useAppContext();

  return (
    <h1>{isCoach ? 'Estado de la vacante del lado del coach' : 'Estado de la vacante del lado del alumno'}</h1>
  );
};

export default VacancyStatus;
