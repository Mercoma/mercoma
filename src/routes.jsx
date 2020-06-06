import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import NotFound from "./pages/NotFound/NotFound";
import Photos from './pages/Photos';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/photos" component={Photos} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
