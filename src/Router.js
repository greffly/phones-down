import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import HomePage from './HomePage/HomePage';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/start' component={HomePage} />
    </Switch>
  );
};

export default Router;
