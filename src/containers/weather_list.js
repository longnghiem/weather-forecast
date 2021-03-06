import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    const name= cityData.city.name;
    //for each items in the array 'list' (we named it 'weather')
    // we assign the temps = weather.main.temp
    const temps = cityData.list.map(weather => weather.main.temp - 273);

    const pressures =cityData.list.map(weather => weather.main.pressure);
    const humidities =cityData.list.map(weather => weather.main.humidity);

    const {lon,lat} = cityData.city.coord;
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td> <Chart data={temps} color="orange" units='℃'/> </td>
        <td> <Chart data={pressures} color="blue" units='hPa' /> </td>
        <td> <Chart data={humidities} color="green" units='%'/> </td>
      </tr>
    );
  }

  render(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (℃)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>

    )
  }
}

// function mapStateToProps(state) {
//   return {weather: state.weather};
// }
function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
