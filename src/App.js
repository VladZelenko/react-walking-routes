import React from "react"
import MapWithAMarker from "./Components/maps/map";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MapWithAMarker
          // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1YicxS-FTM0adr6nOLBFpg9lXlebqzks&v=3.exp&libraries=geometry,drawing,places"
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCn1kUvFuDsu1dkeN6Q-d2RHhBFvz78kNo&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </React.Fragment>
    )
  }
}
export default App;
