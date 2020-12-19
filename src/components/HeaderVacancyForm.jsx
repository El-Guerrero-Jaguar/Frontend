import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';

const HeaderVacancyForm = ({ vacancy }) => {
  const [vacancyForm, setVacancy] = useState(vacancy);

  const handleSubmit = () => {
    setVacancy({ ...vacancyForm });
  };

  return (
    <form className="HeaderVacancy-form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        <h2>Titulo</h2>
        <input type="text" id="title" name="title" placeholder="Titulo de la vacante" />
      </label>
      <p>Form para publicar en forma la vacante</p>
      <button type="submit">Publicar la oferta</button>
    </form>
  );
};

export default HeaderVacancyForm;
