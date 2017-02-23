var axios = require('axios');

const OPEN_WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?appid=388d9985da49a7a8d3f0af786c04c1b3&units=celcius';
const API_KEY = '388d9985da49a7a8d3f0af786c04c1b3';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_API}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res){
      throw new Error(res.data.message);
    });
  }
}
