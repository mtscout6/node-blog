import walk from '../lib/walk-dir';
import Posts from './posts';

let files = walk(__dirname, /\.md$/);

let PostsContext = new Posts(files.map(function(f) {
  return require(f);
}));

export default PostsContext;
