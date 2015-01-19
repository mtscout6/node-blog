var postsContext = require.context('.', true, /\.md*/);
postsContext.keys().forEach(postsContext);

var posts = require('./posts');

postsContext.keys().forEach(function(p) {
  posts.add(postsContext(p));
});

module.exports = posts;
