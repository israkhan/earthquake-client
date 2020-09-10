import React from "react";
import EarthquakeList from "./EarthquakeList";
import SearchBar from "./SearchBar";
import Map from "../map/Map";

const EarthquakeSearchScreen = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "auto",
          margin: "5px",
        }}
      >
        <SearchBar />
        <EarthquakeList />
      </div>
      <div style={{ marginRight: 0 }}>
        <Map />
      </div>
    </div>
  );
};

export default EarthquakeSearchScreen;
