var React = require('react');
var GetWeather = require('GetWeather');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return{
      location: 'Jakarta',
      temp: '69'
    };
  },
  handleNewData: function (location) {
    var that = this;
    openWeatherMap.getTemp(location).then (function (temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function(err){
      alert(err);
    });
  },
  render: function () {
    var {temp, location} = this.state;
    return (
      <div>
        <center><h3>Get Weather</h3></center>
        <GetWeather onNewdata={this.handleNewData}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
