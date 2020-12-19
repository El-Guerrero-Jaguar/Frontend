import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GetAllVacancies = gql`
  query AllVacancies {
    vacancies: GetAllVacants {
      id
      title
      company
      description
      town
      status
      rating
      modality
      date
      salary
      urlVacant
      urlCompany
    }
  }
`;

const withVacancies = (Component) => (props) => {
  const { loading, error, data } = useQuery(GetAllVacancies);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <Component vacancies={!data ? [] : data.vacancies} {...props} />
  );
};

export default withVacancies;
