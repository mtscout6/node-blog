var React = require('react');
var { RouteHandler } = require('react-router');

var NoOpHandler = React.createClass({
  render: function() {
    return <RouteHandler {...this.props} />;
  }
});

module.exports = NoOpHandler;

