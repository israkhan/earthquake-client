import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import { SignUp, Login, Home, EarthquakeDetails } from "./";

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
          <Route exact path="/earthquakes/:id" component={EarthquakeDetails} />
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
