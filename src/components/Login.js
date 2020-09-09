import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import Axios from "axios";
import firebase from "../firebase";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e, p) => {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(e, p);
      console.log(user);
      // await Axios.get(`/api/users/${firebase.currentUser.id}`);
    } catch (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }
  };

  return (
    <Box component="span" m={1}>
      <form noValidate autoComplete="off" name="signUp">
        <TextField
          id="email"
          label="Email"
          value={email}
          onChange={(val) => {
            console.log(val);
            return setEmail(val);
          }}
        />

        <TextField
          id="password"
          label="Password"
          value={password}
          onChange={(val) => setPassword(val)}
        />
      </form>
      <Button
        variant="contained"
        color="primary"
        onSubmit={() => handleSubmit(email, password)}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Login;
