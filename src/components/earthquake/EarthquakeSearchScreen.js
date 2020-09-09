import React from "react";
import { Grid } from "@material-ui/core";
import EarthquakeList from "./EarthquakeList";
import SearchBar from "./SearchBar";

const EarthquakeSearchScreen = (props) => {
  return (
    <Grid container>
      <Grid item justify="center">
        <SearchBar />
        <EarthquakeList />
      </Grid>
    </Grid>
  );
};

export default EarthquakeSearchScreen;
