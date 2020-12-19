import React from 'react';
import { Link } from 'react-router-dom';

import profile from '../assets/statics/profile.svg';

function StudentList() {
  return (
    <div className="StudentList_container">
      <Link className="StudentList_item" to="/vacancies/applied">
        <img src={profile} alt="User" />
        <div className="StudentList_item-text">
          <h3>Nombre del estudiante</h3>
          <p>Especialidad</p>
        </div>
      </Link>
      <Link className="StudentList_item" to="/vacancies/applied">
        <img src={profile} alt="User" />
        <div className="StudentList_item-text">
          <h3>Nombre del estudiante</h3>
          <p>Especialidad</p>
        </div>
      </Link>
    </div>
  );
}

export default StudentList;
