var walk = require('../lib/walk-dir');
var files = walk(__dirname, /\.md$/);

var posts = require('./posts');

files.forEach(function(p) {
  posts.add(require(p));
});

module.exports = posts;
