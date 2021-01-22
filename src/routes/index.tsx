import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Character from '../pages/Character';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/character/:id" component={Character} />
    </Switch>
  </>
);

export default Routes;
