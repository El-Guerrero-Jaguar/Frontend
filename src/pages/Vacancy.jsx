import React from 'react';
import { useAppContext } from '../context';

const Vacancy = () => {
  const [{ isCoach }] = useAppContext();

  return (
    <h1>{isCoach ? 'Vacante del lado del coach' : 'Vacante del lado del alumno'}</h1>
  );
};

export default Vacancy;
