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
    backgroundColor: "#81b29a",
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
        <Typography
          variant="h6"
          className={classes.title}
          style={{ color: "#3d405b", textDecoration: "bolder" }}
        >
          Earthquake Tracker
        </Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="#3d405b"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
