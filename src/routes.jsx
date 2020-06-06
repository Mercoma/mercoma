import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from "./pages/NotFound";
import Photos from './pages/Photos';
import Reset from './pages/Reset';
import SignUp from './pages/SignUp';
import PrivateRoute from './routes/PrivateRoute';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/reset" component={Reset} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/dashboard/photos" component={Photos} />
        <PrivateRoute component={NotFound} />
      </Switch>
    </Router>
  );
}
