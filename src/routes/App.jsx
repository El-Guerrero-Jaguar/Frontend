import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/styles/main.scss';

import Home from '../pages/Home';
import Vacancy from '../pages/Vacancy';
import VacanciesApplied from '../pages/VacanciesApplied';
import VacancyStatus from '../pages/VacancyStatus';
import NotFound from '../pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/vacancies/applied/" component={VacanciesApplied} />
      <Route exact path="/vacancies/:id" component={Vacancy} />
      <Route exact path="/vacancies/applied/:id" component={VacancyStatus} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
