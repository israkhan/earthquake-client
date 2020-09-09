import React from "react";
import { connect } from "react-redux";

import Login from "./auth/Login";

function App() {
  return (
    <h1 className="App">
      <Login />
    </h1>
  );
}

const mapState = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapState)(App);
