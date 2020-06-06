import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from './views/Dashboard';
import Photos from './views/Photos';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/photos" component={Photos} />
      </Switch>
    </Router>
  );
}
