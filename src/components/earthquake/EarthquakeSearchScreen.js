import React from "react";

import { EarthquakeList, SearchBar, Map } from "../";

const EarthquakeSearchScreen = () => {
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
