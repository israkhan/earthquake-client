import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e, p) => props.signIn(e, p);

  return (
    <Box component="span" m={1}>
      <form noValidate autoComplete="off">
        <TextField
          id="email"
          label="Email"
          value={email}
          onChange={(val) => setEmail(val)}
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
