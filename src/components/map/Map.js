import React from "react";
import { connect } from "react-redux";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

import { Marker } from "../";

const Map = (props) => {
  const lat = Math.round(props.geoCode.lat) || 50;
  const lng = Math.round(props.geoCode.lng) || 10;
  const position = [lat, lng];
  return (
    <LeafletMap
      center={position}
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
      {props.earthquakes.map((obj) => (
        <Marker key={obj.id} quake={obj} />
      ))}
    </LeafletMap>
  );
};

const mapState = (state) => ({
  earthquakes: state.earthquakes.earthquakes,
  geoCode: state.earthquakes.queryGeoCode,
});

export default connect(mapState)(Map);
