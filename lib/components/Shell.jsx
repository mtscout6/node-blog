var React = require('react');
var { RouteHandler } = require('react-router');

var Shell = React.createClass({
  render: function() {
    return (
      <div>
        <div>Hello I'm in React now!</div>
        <RouteHandler {...this.props} />
      </div>
    );
  }
});

module.exports = Shell;
