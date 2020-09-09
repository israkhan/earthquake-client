import React, { useState } from "react";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";

import { getUser } from "../store/user";
import { signIn } from "../store/auth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    props.signIn(email, password);
    props.fetchUser(props.uid);
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "80vh" }}
      >
        <Typography variant="h2">Earthquake Tracker</Typography>
        <Grid item>
          <TextField
            id="email"
            label="Email"
            value={email}
            margin="normal"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="Password"
            value={password}
            margin="normal"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            margin="normal"
            onClick={async () => await handleSignIn()}
          >
            Submit
          </Button>
        </Grid>
        <Grid item>
          {props.signInError && (
            <Typography variant="body1">{props.signInError}</Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

const mapState = (state) => ({
  uid: state.auth.uid,
  signInError: state.auth.signInError,
});

const mapDispatch = (dispatch) => ({
  fetchUser: (uid) => dispatch(getUser(uid)),
  signIn: (email, password) => dispatch(signIn(email, password)),
});

export default connect(mapState, mapDispatch)(Login);
