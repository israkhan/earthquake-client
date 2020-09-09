import React from "react";
import { connect } from "react-redux";

import Login from "./auth/Login";
import SearchBar from "./earthquake/SearchBar";

function App(props) {
  // return (
  //   <h1 className="App">{props.isLoggedIn ? <SearchBar /> : <Login />}</h1>
  // );

  return (
    <h1 className="App">
      <SearchBar />
    </h1>
  );
}

const mapState = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapState)(App);
