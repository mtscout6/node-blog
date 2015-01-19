var React = require('react');

var PostEntryDescription = React.createClass({
  render: function() {
    return (
      <div>{this.props.title} - {this.props.date.format("MMMM D, YYYY")} [{typeof this.props.date}]</div>
    );
  }
});

module.exports = PostEntryDescription;
