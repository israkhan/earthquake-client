import React from "react";
import SignUp from "./components/SignUp";
require("dotenv").config();

function App() {
  return (
    <h1 className="App">
      <SignUp />
    </h1>
  );
}

export default App;
