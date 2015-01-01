var React = require('react');
var { Link } = require('react-router');

var Other = React.createClass({
  render: function() {
    return (
      <div>Go back <Link to='root'>Home</Link></div>
    );
  }
});

module.exports = Other;
