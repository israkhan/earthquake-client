import React, { useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import axios from "axios";
import { auth } from "../firebase";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // axios.defaults.baseURL =
  //   "https://us-central1-earthquake-notification-59115.cloudfunctions.net/app";
  const handleSubmit = async () => {
    try {
      console.log("here");
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await axios.post("/api/users/", {
        uid: user.uid,
        firstName,
        lastName,
        email,
        phoneNumber,
      });
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
    <Grid
      component="span"
      m={1}
      container
      spacing={2}
      alignItems="center"
      direction="column"
    >
      {/* <form noValidate autoComplete="off"> */}
      <div>Earthquake Tracker</div>
      <div>
        <Grid item>
          <TextField
            name="firstName"
            label="First Name"
            value={firstName}
            margin="normal"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            name="lastName"
            label="Last Name"
            value={lastName}
            margin="normal"
            onChange={(event) => setLastName(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            name="phoneNumber"
            label="Phone number"
            value={phoneNumber}
            margin="normal"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            name="email"
            label="Email"
            value={email}
            margin="normal"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            name="password"
            label="Password"
            value={password}
            margin="normal"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Grid>
      </div>

      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={async () => await handleSubmit()}
          margin="normal"
        >
          Submit
        </Button>
      </Grid>
      {/* </form> */}
    </Grid>
  );
};

export default SignUp;
