import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData) {

    const cityName = cityData.city.name;
    const cityTemp = cityData.list.map(weather => weather.main.temp);
    const cityPressure = cityData.list.map(weather => weather.main.pressure);
    const cityHumidity = cityData.list.map(weather => weather.main.humidity);

    return(
      <tr key={cityName}>
        <td>
          {cityName}
        </td>
        <td>
          <Chart data={cityTemp} color="red" unit="K"/>
        </td>
        <td>
          <Chart data={cityPressure} color="green" unit="hPa"/>
        </td>
        <td>
          <Chart data={cityHumidity} color="black" unit="%"/>
        </td>
      </tr>
    );

}

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}

        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return{weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);