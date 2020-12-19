import React, { useState, useMemo } from 'react';
import { useAppContext } from '../context';
import withVacancies from '../hoc/withVacancies';

import VacanciesList from '../containers/VacaciesList';
import StudentsList from '../containers/StudentsList';

const Home = ({ vacancies }) => {
  const [{ isCoach }] = useAppContext();
  const [search, setSearch] = useState('');

  const filtederVacancies = useMemo(() => vacancies.filter((vacancy) => (
    vacancy.title.toLowerCase().includes(search.toLowerCase())
  )), [vacancies, search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return isCoach ? (
    <>
      <section className="Home-list-vacancies">
        <h2>Lista de Vacantes</h2>
        <VacanciesList vacancies={vacancies} />
      </section>
      <section className="Home-list-alumns">
        <h2>Lista de Vacantes</h2>
        <StudentsList />
      </section>
    </>
  ) : (
    <>
      <div className="Home-search">
        <input type="text" placeholder="Buscar vacante" onChange={handleSearch} />
      </div>
      <VacanciesList vacancies={filtederVacancies} />
    </>
  );
};

export default withVacancies(Home);
