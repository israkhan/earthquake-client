import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

const EarthquakeItem = (props) => {
  const earthProps = props.quake.properties;
  const time = new Date(earthProps.time).toDateString();
  const [, location] = earthProps.place.split("of ");
  return (
    <Card variant="outlined">
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
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
  );
};

export default EarthquakeItem;
