import React from "react";
import { Grid } from "@material-ui/core";
import EarthquakeList from "./earthquake/EarthquakeList";
import SearchBar from "./earthquake/SearchBar";
import Map from "./map/Map";

const EarthquakeSearchScreen = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SearchBar />
        <EarthquakeList />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default EarthquakeSearchScreen;
