import React from "react";
import { connect } from "react-redux";

import Route from "./Routes";

function App(props) {
  return (
    <div className="App">
      <Route />
    </div>
  );
}

const mapState = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapState)(App);
