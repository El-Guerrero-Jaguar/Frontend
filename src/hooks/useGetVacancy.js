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
    title: 'Titulo de la vacante',
    company: 'Nombre de la empresa',
    description: 'Descripción de la vacante',
    town: 'País o ciudad',
    status: 'Estatus de la vacante',
    rating: '',
    modality: 'Modalidad de la vacante',
    date: '',
    salary: '',
    urlVacant: 'Enlace de la vacante',
    urlCompany: 'Enlace de la empresa',
  });

  useEffect(() => {
    getVacancy({ variables: { id } });
    if (data !== undefined) {
      setVacancy({
        ...data.vacancy,
      });
    }
  }, [data, id]);

  return [vacancy, loading];
};

export default useGetVacancy;
