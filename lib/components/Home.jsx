var React = require('react');
var { Link } = require('react-router');
var PostEntryDescription = require('./PostEntryDescription');
var posts = require('../../posts');

var Home = React.createClass({
  render: function() {
    var postList = posts.reverseOrder().map(function(p, index) {
      return <PostEntryDescription {...p.metadata} key={index} />
    });

    return (
      <div className='blog-post-list'>
        {postList}
      </div>
    );
  }
});

module.exports = Home;
