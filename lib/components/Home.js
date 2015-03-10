import React from 'react';
import { Link } from 'react-router';
import PostEntryDescription from './PostEntryDescription';
import posts from '../../posts';

const Home = React.createClass({
  render() {
    let postList = posts.reverseOrder().map((p, index) => {
      return (
        <PostEntryDescription {...p.metadata}
          key={index}
          divider={index !== posts.posts.length - 1}
        />
      );
    });

    return (
      <div>
        {postList}
      </div>
    );
  }
});

export default Home;
