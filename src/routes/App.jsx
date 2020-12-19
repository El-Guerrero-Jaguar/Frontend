import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/styles/main.scss';

import Home from '../pages/Home';
import Vacancy from '../pages/Vacancy';
import VacanciesApplied from '../pages/VacanciesApplied';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vacancies/applied/" component={VacanciesApplied} />
        <Route exact path="/vacancies/:id" component={Vacancy} />
        <Route exact path="/vacancies/applied/:id" component={Vacancy} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
