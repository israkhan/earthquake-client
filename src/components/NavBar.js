import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#536B78",
    color: "white",
    boxShadow: "0px 0px 0px 0px",
  },
  title: {
    flexGrow: 1,
  },
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Earthquake Tracker
        </Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
