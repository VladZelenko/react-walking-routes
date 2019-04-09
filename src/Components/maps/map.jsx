import React from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Directions from "./Routes";


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <React.Fragment>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 49.4401567, lng: 32.0546487 }}
    >
      <Marker
        position={{ lat: 49.4401567, lng: 32.0546487 }}
      />
    </GoogleMap>
  </React.Fragment>

));


export default MapWithAMarker;






