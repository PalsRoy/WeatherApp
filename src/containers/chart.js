import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMaps from '../components/googleMaps';

import SparklineChart from '../components/sparklineChart';

class Chart extends Component {

  renderWeather(cityData){

    console.log(cityData);
    const cityName = cityData.city.name;
    const Temps = cityData.list.map(tempelement => tempelement.main.temp);
    const Humid = cityData.list.map(tempelement => tempelement.main.humidity);
    const Pressure = cityData.list.map(tempelement => tempelement.main.pressure);
    const {lat, lon } = cityData.city.coord;
    console.log(lat);
    console.log(lon);

    return (
      <tr key={cityName}>
          <td><GoogleMaps lat={lat} lon={lon} /></td>
          <td>
            <SparklineChart data={Temps} color="orange" units=" K"/>
          </td>
          <td>
            <SparklineChart data={Humid} color="green" units=" %"/>
          </td>
          <td>
           <SparklineChart data={Pressure} color="gray" units=" hPa"/>
          </td>
      </tr>
    );
  }

  render() {

    return (
      <table className="table">
      <thead>
      <tr>
      <th>City</th>
      <th>Temperatures (K)</th>
      <th>Humidity (%)</th>
      <th>Pressure (hPa)</th>
      </tr>
      </thead>
      <tbody>
         {this.props.fetchWeather.map(this.renderWeather)}
      </tbody>
      </table>
    );
  }
}

//Anything on the redux global state appears on props now.
function mapStateToProps(state){
  return {
    fetchWeather: state.fetchWeather
  };
}

export default connect(mapStateToProps)(Chart);
