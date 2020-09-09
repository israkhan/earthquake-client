import React from "react";
import { connect } from "react-redux";
import Login from "./auth/Login";
import EarthquakeSearchScreen from "./EarthquakeSearchScreen";
import NavBar from "./NavBar";

function App(props) {
  // return (
  //   <h1 className="App">
  //     {props.isLoggedIn ? <EarthquakeSearchScreen /> : <Login />}
  //   </h1>
  // );

  return (
    <div className="App">
      <NavBar />
      <EarthquakeSearchScreen />
    </div>
  );
}

const mapState = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapState)(App);
