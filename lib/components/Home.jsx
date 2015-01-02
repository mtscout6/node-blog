var React = require('react');
var { Link } = require('react-router');

var Home = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  onClicked: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  render: function() {
    return (
      <div>
        <span>Count: {this.state.count}</span>
        <button onClick={this.onClicked}>Bump</button>
      </div>
    );
  }
});

module.exports = Home;
