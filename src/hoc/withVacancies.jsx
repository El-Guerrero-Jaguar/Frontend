import React from 'react';

const withVacancies = (Component) => (props) => {
  const data = [
    {
      id: 0,
      title: 'titulo de la vacante titulo de la vacante titulo de la vacante',
      company: 'Globant',
      country: 'Méxilombia',
      modality: 'remoto',
    },
    {
      id: 1,
      title: 'titulo de la vacante 1',
      company: 'Globant',
      country: 'Méxilombia',
      modality: 'remoto',
    },
    {
      id: 2,
      title: 'titulo de la vacante 12',
      company: 'Globant',
      country: 'Méxilombia',
      modality: 'remoto',
    },
    {
      id: 3,
      title: 'titulo de la vacante 2',
      company: 'Globant',
      country: 'Méxilombia',
      modality: 'remoto',
    },
  ];

  return (
    <Component vacancies={data} {...props} />
  );
};

export default withVacancies;
