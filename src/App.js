import React from "react"
import MapWithAMarker from "./Components/maps/map";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJanaPUC9bIqSPj8dZTxXJpOv7s4timzk&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `98vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </React.Fragment>
    )
  }
}
export default App;
