import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import axios from "axios";
import { auth } from "../firebase";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  axios.defaults.baseURL =
    "http://127.0.0.1:5001/us-central1-earthquake-notification-59115.cloudfunctions.net/app";
  const handleSubmit = async (e, p) => {
    try {
      console.log("here");
      await axios.post("/api/users/", {
        firstName,
        lastName,
        email,
        phoneNumber,
      });
      console.log("here2");
      await auth.createUserWithEmailAndPassword(e, p);
      console.log("here3");
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ...
    }
  };

  return (
    <Box component="span" m={1}>
      <form noValidate autoComplete="off">
        <TextField
          name="firstName"
          label="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <TextField
          name="phoneNumber"
          label="Phone number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <TextField
          name="email"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          name="password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>
      <Button
        variant="contained"
        color="primary"
        onClick={async () => await handleSubmit(email, password)}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SignUp;
