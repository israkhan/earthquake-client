import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import EarthquakeDetail from "./components/earthquake/EarthquakeDetails";

const Routes = (props) => {
  const isLoggedIn = props.isLoggedIn;

  return (
    <Router>
      {!isLoggedIn && (
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Login} />
        </Switch>
      )}
      {isLoggedIn && (
        <Switch>
          <Route exact path="/earthquakes/:id" component={EarthquakeDetail} />
          <Route path="/" component={Home} />
        </Switch>
      )}
    </Router>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: state.auth.uid,
  };
};

export default withRouter(connect(mapState, null)(Routes));
