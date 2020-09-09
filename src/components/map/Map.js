import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

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
      <Marker position={[26, 17]}>
        <Popup>Popup for any custom information.</Popup>
      </Marker>
    </LeafletMap>
  );
};

export default Map;
