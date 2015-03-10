import React from 'react';
import { State } from 'react-router';
import posts from '../../posts';
import NotFound from './NotFound';

const BlogPost = React.createClass({
  displayName: 'BlogPost',

  mixins: [ State ],

  render() {
    var Post = posts.forSlug(this.getParams().post);

    if (Post === null) {
      return <NotFound />;
    }

    return <Post />;
  }
});

export default BlogPost;
