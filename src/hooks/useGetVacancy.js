import { useEffect, useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GetVacancy = gql`
  query Query($id: ID) {
    vacancy: GetVacants(id: $id) {
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

const useGetVacancy = (id) => {
  const [getVacancy, { loading, data }] = useLazyQuery(GetVacancy, { fetchPolicy: 'cache-and-network' });
  const [vacancy, setVacancy] = useState({
    title: '',
    company: '',
    description: '',
    town: '',
    status: '',
    rating: '',
    modality: '',
    date: '',
    salary: '',
    urlVacant: '',
    urlCompany: '',
  });

  useEffect(() => {
    getVacancy({ variables: { id } });
    if (data !== undefined) {
      setVacancy({
        ...vacancy,
        ...data.vacancy,
      });
    }
  }, [data]);

  return [vacancy, loading];
};

export default useGetVacancy;
