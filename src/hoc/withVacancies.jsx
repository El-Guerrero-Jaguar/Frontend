import React from 'react';
// import { useQuery, gql } from '@apollo/client';

// const GetVacancy = gql`
//   query GetVacancy($id: ID) {
//     vacants(id: $id) {
//       id
//       title
//       company
//       description
//       town
//       status
//       rating
//       modality
//       date
//       salary
//       urlVacant
//       urlCompany
//     }
// }
// `;

const withVacancies = (Component) => (props) => {
  // const { loading, error, data } = useQuery(GetVacancy, { variables: { id: '12' } });

  // if (loading) return <h1>Loading...</h1>;
  // if (error) return <h1>Error</h1>;
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
