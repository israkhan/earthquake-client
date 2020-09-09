import React from "react";
import { connect } from "react-redux";
import Login from "./auth/Login";
import EarthquakeSearchScreen from "./earthquake/EarthquakeSearchScreen";

function App(props) {
  return (
    <h1 className="App">
      {props.isLoggedIn ? <EarthquakeSearchScreen /> : <Login />}
    </h1>
  );
}

const mapState = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapState)(App);
