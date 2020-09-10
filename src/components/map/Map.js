import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

const Map = (props) => {
  return (
    <LeafletMap
      center={[50, 10]}
      zoom={4}
      maxZoom={10}
      minZoom={4}
      attributionControl={true}
      zoomControl={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {props.earthquakes.map((obj) => {
        const [, location] = obj.properties.place.split("of ");
        return (
          <Marker position={[obj.properties.lat, obj.properties.lng]}>
            <Popup>
              <Typography variant="h6">{location}</Typography>
              <Typography variant="body2">
                Magnitude: {obj.properties.mag}
                <br />
                Total Reports: {obj.properties.reports}
              </Typography>
            </Popup>
          </Marker>
        );
      })}{" "}
    </LeafletMap>
  );
};

const mapState = (state) => ({
  earthquakes: state.earthquakes.earthquakes,
});

export default connect(mapState)(Map);
