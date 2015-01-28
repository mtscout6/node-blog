var React = require('react');
var { State } = require('react-router');
var posts = require('../../posts');
var NotFound = require('./NotFound');

var BlogPost = React.createClass({
  mixins: [ State ],

  render() {
    var Post = posts.forSlug(this.getParams().post);

    if (Post === null) {
      return <NotFound />;
    }

    return <Post />;
  }
});

module.exports = BlogPost;
