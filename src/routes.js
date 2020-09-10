import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import SignUp from "./components/auth/SignUp";

const Routes = () => {
  return (
    <Router>
      <div>
        <main>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route exact path="/" component={App} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
