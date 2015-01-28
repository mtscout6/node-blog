var React = require('react');
var { Link } = require('react-router');
var PostEntryDescription = require('./PostEntryDescription');
var posts = require('../../posts');

var Home = React.createClass({
  render() {
    var postList = posts.reverseOrder().map((p, index) => {
      return <PostEntryDescription {...p.metadata} key={index} divider={index !== posts.posts.length - 1} />
    });

    return (
      <div>
        {postList}
      </div>
    );
  }
});

module.exports = Home;
