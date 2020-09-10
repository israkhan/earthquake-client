import React, { useState } from "react";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signIn } from "../../store";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    await props.signIn(email, password);
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
            label="Email"
            value={email}
            margin="normal"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
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
        <br />
        <NavLink to="/signup" variant="body1">
          {" "}
          Sign up instead{" "}
        </NavLink>
      </Grid>
    </div>
  );
};

const mapState = (state) => ({
  uid: state.auth.uid,
  signInError: state.auth.signInError,
});

const mapDispatch = (dispatch) => ({
  signIn: (email, password) => dispatch(signIn(email, password)),
});

export default connect(mapState, mapDispatch)(Login);
