var _ = require('lodash');
var moment = require('moment');

function Posts(posts) {
  this.posts = posts || [];
};

Posts.prototype.reverseOrder = function() {
  return _(this.posts)
    .sortBy(this.posts, function(p) {
      return p.metadata.date;
    })
    .reverse()
    .value();
};

Posts.prototype.forSlug = function(urlSlug) {
  var index = _.findIndex(this.posts, function(p) {
    return p.metadata.urlSlug === urlSlug;
  });

  if (index < 0) {
    return null;
  }

  return this.posts[index];
};

module.exports = Posts;
