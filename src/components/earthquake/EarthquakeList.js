import React from "react";
import { connect } from "react-redux";

import EarthquakeItem from "./EarthquakeItem";

const EarthquakeList = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {props.earthquakes.map((quake) => (
        <EarthquakeItem key={quake.id} quake={quake} />
      ))}
    </div>
  );
};

const mapState = (state) => ({
  earthquakes: state.earthquakes.earthquakes,
});

export default connect(mapState)(EarthquakeList);
