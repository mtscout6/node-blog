var walk = require('../lib/walk-dir');
var files = walk(__dirname, /\.md$/);

var Posts = require('./posts');

module.exports = new Posts(files.map(function(f) {
  return require(f);
}));
