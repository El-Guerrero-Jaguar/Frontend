import React from 'react';
import { useAppContext } from '../context';

import TableStatusVacancies from '../containers/TableStatusVacancies';

const VacanciesApplied = () => {
  const [{ isCoach }] = useAppContext();

  return (
    <>
      {isCoach && <h1 className="VacanciesApplied-title">Aplicaciones del estudiante XXXX</h1>}
      <TableStatusVacancies />
    </>
  );
};

export default VacanciesApplied;
