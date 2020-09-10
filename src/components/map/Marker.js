import React from "react";
import { Typography } from "@material-ui/core";
import { Marker as LeafletMarker, Popup } from "react-leaflet";

const Marker = (props) => {
  const earthProps = props.quake.properties;
  const [, location] = earthProps.place.split("of ");

  return (
    <LeafletMarker position={[earthProps.lat, earthProps.lng]}>
      <Popup>
        <Typography variant="h6">{location}</Typography>
        <Typography variant="body2">
          Magnitude: {earthProps.mag}
          <br />
          Total Reports: {earthProps.reports}
        </Typography>
      </Popup>
    </LeafletMarker>
  );
};

export default Marker;
