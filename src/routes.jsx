import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from "./pages/NotFound";
import Photos from './pages/Photos';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import PrivateRoute from './routes/PrivateRoute';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <PrivateRoute path="/dashboard/photos" component={Photos} />
        <PrivateRoute path="/dashboard/profile" component={Profile} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute component={NotFound} />
      </Switch>
    </Router>
  );
}
