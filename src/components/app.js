import React, { Component } from 'react';
import WeatherList from '../containers/weather_list';
import Chart from '../containers/chart';

export default class App extends Component {
  render() {
    return (
      <div>
      <WeatherList />
      <Chart />
      </div>
    );
  }
}
