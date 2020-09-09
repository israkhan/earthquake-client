import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { connect } from "react-redux";

const SearchBar = (props) => {
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState(20);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      justify="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item>
        <TextField
          label="Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          xs={4}
        />
        <TextField
          label="Radius"
          value={radius}
          onChange={(event) => setRadius(event.target.value)}
          xs={4}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Start Date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
        <TextField
          label="End Date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </Grid>
    </Grid>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(SearchBar);
