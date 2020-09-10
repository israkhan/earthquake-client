import React, { useState } from "react";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { signUp } from "../../store/auth";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const history = useHistory();

  const handleSubmit = async () => {
    props.signUp(email, password, firstName, lastName, phoneNumber);
    history.push("/");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "80vh" }}
    >
      <Typography variant="h2">Earthquake Tracker</Typography>
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
        >
          Submit
        </Button>
      </Grid>
      <Grid item>
        {props.signUpError && (
          <Typography variant="body1">{props.signUpError}</Typography>
        )}
      </Grid>
    </Grid>
  );
};

const mapState = (state) => ({
  uid: state.auth.uid,
  signUpError: state.auth.signUpError,
});

const mapDispatch = (dispatch) => ({
  signUp: (email, password, firstName, lastName, phoneNumber) =>
    dispatch(signUp(email, password, firstName, lastName, phoneNumber)),
});

export default connect(mapState, mapDispatch)(SignUp);
