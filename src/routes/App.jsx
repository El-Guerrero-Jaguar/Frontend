import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/styles/main.scss';

import Home from '../pages/Home';
import Vacant from '../pages/Vacant';
import VacanciesApplied from '../pages/VacanciesApplied';
import VacantStatus from '../pages/VacantStatus';
import NotFound from '../pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/vacancies/applied/" component={VacanciesApplied} />
      <Route exact path="/vacancies/:id" component={Vacant} />
      <Route exact path="/vacancies/applied/:id" component={VacantStatus} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
