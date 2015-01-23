var postsContext = require.context('.', true, /\.md*/);
postsContext.keys().forEach(postsContext);

var Posts = require('./posts');

module.exports = new Posts(postsContext.keys().map(function(p){
  return postsContext(p);
}));

