var React = require('react');
var { State } = require('react-router');
var posts = require('../../posts');

var BlogPost = React.createClass({
  mixins: [ State ],

  render: function() {
    var Post = posts.forSlug(this.getParams().post);

    if (Post === null) {
      return <h1>TODO: Redirect to 404</h1>
    }

    return <Post />;
  }
});

module.exports = BlogPost;
