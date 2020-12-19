import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context';
import useGetVacancy from '../hooks/useGetVacancy';

import HeaderVacancy from '../components/HeaderVacancy';

const Vacancy = () => {
  const [{ isCoach }] = useAppContext();
  const { id } = useParams();
  const [vacancy, loading] = useGetVacancy(id);

  console.log(vacancy);
  console.log(loading);

  return (
    <>
      <HeaderVacancy isCoach={isCoach} />
      <p className="Vacancy-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </>
  );
};

export default Vacancy;
