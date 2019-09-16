import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import HomePage from './HomePage/HomePage';
import ChallengePage from './ChallengePage/ChallengePage';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/start' component={HomePage} />
      <Route exact path='/challenge' component={ChallengePage} />
    </Switch>
  );
};

export default Router;
