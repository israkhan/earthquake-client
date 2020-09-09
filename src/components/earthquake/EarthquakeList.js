import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { connect } from "react-redux";

import EarthquakeItem from "./EarthquakeItem";

const EarthquakeList = (props) => {
  return (
    <GridList cellHeight={160} cols={1}>
      {props.earthquakes.map((quake) => (
        <GridListTile key={quake.id}>
          <EarthquakeItem key={quake.id} quake={quake} />
        </GridListTile>
      ))}
    </GridList>
  );
};

const mapState = (state) => ({
  earthquakes: state.earthquakes.earthquakes,
});

export default connect(mapState)(EarthquakeList);
