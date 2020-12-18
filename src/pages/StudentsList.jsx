import React from 'react';
import { useAppContext } from '../context';

const StudentList = () => {
  const [{ isCoach }] = useAppContext();
  return (
      <div className="StudentList_container">
        <h1> Usuario </h1>
      </div>
  );
};

export default StudentList;