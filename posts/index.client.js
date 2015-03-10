import Posts from './posts';
let postsContext = require.context('.', true, /\.md*/);
postsContext.keys().forEach(postsContext);

let PostsContext = new Posts(postsContext.keys().map((p) =>{
  return postsContext(p);
}));

export default PostsContext;
