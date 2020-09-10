import React, { useState } from "react";
import { connect } from "react-redux";

import { EarthquakeItem, EarthquakeListPagination } from "../";

const EarthquakeList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentQuakes =
    props.earthquakes.slice(indexOfFirstPage, indexOfLastPage) || [];

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {currentQuakes.map((quake) => (
        <EarthquakeItem key={quake.id} quake={quake} />
      ))}
      {props.earthquakes.length > 0 && (
        <EarthquakeListPagination
          postsPerPage={postsPerPage}
          totalPosts={props.earthquakes.length}
          handleChange={handleChange}
          page={currentPage}
        />
      )}
    </div>
  );
};

const mapState = (state) => ({
  earthquakes: state.earthquakes.earthquakes,
});

export default connect(mapState)(EarthquakeList);
