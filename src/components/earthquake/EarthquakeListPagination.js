import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";

const EarthquakeListPagination = ({
  postsPerPage,
  totalPosts,
  handleChange,
  page,
}) => {
  const pageNumbers = Math.ceil(totalPosts / postsPerPage);

  return (
    <nav>
      <ul>
        <Pagination
          count={pageNumbers}
          page={page}
          onChange={handleChange}
          defaultPage={1}
        />
      </ul>
    </nav>
  );
};

export default EarthquakeListPagination;
