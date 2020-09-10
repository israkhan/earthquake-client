import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

import { AddReportModal } from "../";

const EarthquakeItem = (props) => {
  const earthProps = props.quake.properties;
  const time = new Date(earthProps.time).toDateString();
  const [, location] = earthProps.place.split("of ");

  return (
    <Card variant="outlined" style={{ backgroundColor: "#f4f1de" }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {time}
        </Typography>
        <Typography variant="h5" component="h2">
          {location}
        </Typography>
        <Typography variant="body2" component="p">
          Magnitude: {earthProps.mag}
          <br />
          Total Reports: {earthProps.reports}
          <br />
          <a href={earthProps.url}>More Details</a>
        </Typography>
      </CardContent>
      <div style={{ display: "flex" }}>
        <CardActions>
          <NavLink to={`/earthquakes/${props.quake.id}`}>
            <Button size="small">View Reports</Button>
          </NavLink>
        </CardActions>
        <CardActions>
          <AddReportModal quakeId={props.quake.id} />
        </CardActions>
      </div>
    </Card>
  );
};

export default EarthquakeItem;
