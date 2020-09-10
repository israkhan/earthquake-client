import React, { useState } from "react";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { connect } from "react-redux";

import { getSearchResult } from "../../store/earthquakes";

const radiusOptions = [
  {
    value: 25,
    label: "25 miles",
  },
  {
    value: 50,
    label: "50 miles",
  },
  {
    value: 100,
    label: "100 miles",
  },
  {
    value: 500,
    label: "500 miles",
  },
];

const SearchBar = (props) => {
  const [location, setLocation] = useState("Los Angeles, California");
  const [radius, setRadius] = useState(25);
  const [startDate, setStartDate] = useState("08/31/2020");
  const [endDate, setEndDate] = useState("09/01/2020");

  const handleSearch = () => {
    props.search(location, radius, startDate, endDate);
  };

  const styles = {
    floatingLabelFocusStyle: {
      color: "#3d405b",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        margin: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexGrow: 1,
          }}
        >
          <TextField
            label="Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            fullWidth={true}
          />
          <TextField
            id="radius-select"
            select
            label="Radius"
            value={radius}
            onChange={(event) => setRadius(event.target.value)}
            fullWidth={true}
            style={{ marginTop: "5px" }}
          >
            {radiusOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div
          style={{
            display: "flex",
            margin: "5px",
          }}
        >
          <TextField
            label="Start Date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            fullWidth={true}
          />
          <TextField
            label="End Date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            fullWidth={true}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            margin: "5px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            margin="normal"
            onClick={async () => {
              await handleSearch();
            }}
            style={{ backgroundColor: "#3d405b", margin: "5px" }}
          >
            Search
          </Button>
          <Button
            variant="contained"
            color="primary"
            margin="normal"
            style={{ backgroundColor: "#3d405b", margin: "5px" }}
          >
            Turn on SMS Notifications Me
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  search: (location, radius, start, end) =>
    dispatch(getSearchResult(location, radius, start, end)),
});

export default connect(null, mapDispatch)(SearchBar);
