import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { connect } from "react-redux";

import { getSearchResult } from "../../store/earthquakes";

const SearchBar = (props) => {
  const [location, setLocation] = useState("Los Angeles, California");
  const [radius, setRadius] = useState(20);
  const [startDate, setStartDate] = useState("08/31/2020");
  const [endDate, setEndDate] = useState("09/01/2020");

  const handleSearch = () => props.search(location, radius, startDate, endDate);

  return (
    <div>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          margin="normal"
          onClick={async () => await handleSearch()}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  search: (location, radius, start, end) =>
    dispatch(getSearchResult(location, radius, start, end)),
});

export default connect(null, mapDispatch)(SearchBar);
