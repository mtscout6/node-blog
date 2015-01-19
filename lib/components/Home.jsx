var React = require('react');
var { Link } = require('react-router');
var PostEntryDescription = require('./PostEntryDescription');
var posts = require('../../posts');

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
    var postList = posts.reverseOrder().map(function(p, index) {
      return <PostEntryDescription {...p.metadata} key={index} />
    });

    return (
      <div>
        <div>
          <span>Count: {this.state.count}</span>
          <button onClick={this.onClicked}>Bump</button>
        </div>
        <div>
          {postList}
        </div>
      </div>
    );
  }
});

module.exports = Home;
