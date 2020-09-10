import React, { useState } from "react";
import { connect } from "react-redux";

import { EarthquakeItem } from "../";

const EarthquakeList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

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
