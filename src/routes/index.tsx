import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchAddress from '../pages/SearchAddress';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SearchAddress} />
  </Switch>
);

export default Routes;
