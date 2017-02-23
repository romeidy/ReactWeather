var React = require('react');

var GetWeather = React.createClass({
   onFormSubmit: function (e){
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0){
      this.refs.location.value = '';
      location = location;
      this.props.onNewdata(location);
    }
  },
  render: function() {
    return(
      <div>
        <center><form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter City Name "></input>
          <button>Submit</button>
        </form></center>
      </div>
    );
  }
});

module.exports = GetWeather;
