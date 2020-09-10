import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { connect } from "react-redux";
import Marker from "./Marker";

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
      {props.earthquakes.map((obj) => (
        <Marker key={obj.id} quake={obj} />
      ))}
    </LeafletMap>
  );
};

const mapState = (state) => ({
  earthquakes: state.earthquakes.earthquakes,
});

export default connect(mapState)(Map);
