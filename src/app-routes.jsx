import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from './user-flow/login.component';
import RegistrationComponent from './user-flow/registration.component';
import DashboardComponent from './user-flow/dashboard.component';

const AppRoutes = () => (
  <Router>
    <Switch>
        <Route path="/" exact component={LoginComponent} />
        <Route path="/registration" exact component={RegistrationComponent} />
        <Route path="/dashboard" exact component={DashboardComponent} />
    </Switch>
  </Router>
)

export default AppRoutes;