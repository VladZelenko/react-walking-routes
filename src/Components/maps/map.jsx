import React from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 49.4401567, lng: 32.0546487 }}
  >
    <Marker
      position={{ lat: 49.4401567, lng: 32.0546487 }}
    />
  </GoogleMap>
));


export default MapWithAMarker;






