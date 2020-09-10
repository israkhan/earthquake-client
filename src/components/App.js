import React from "react";
import { connect } from "react-redux";
import Login from "./auth/Login";
import Home from "./Home";

function App(props) {
  return <div className="App">{props.isLoggedIn ? <Home /> : <Login />}</div>;
}

const mapState = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapState)(App);
