var React = require('react');

var WeatherMessage = React.createClass({
  render: function (){
    var location = this.props.location;
    var temp = this.props.temp;
    return (
      <div>
        <p>{temp} on {location}!</p>
      </div>
    );
  }
});
module.exports = WeatherMessage;
