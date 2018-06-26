import React, { Component } from 'react';

class GoogleMaps extends Component {

  componentDidMount(){
    new google.maps.Map(this.refs.map, {
          center: {lat: this.props.lat, lng: this.props.lon},
          zoom: 12
        });
  }

  render(){
    return(
           <div ref="map" />
    );
  }

}


export default GoogleMaps;
