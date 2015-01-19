var _ = require('lodash');
var moment = require('moment');

function Posts() {
  this.posts = [];
};

Posts.prototype.add = function(post) {
  post.metadata.date = moment(post.metadata.date, "YYYY-MM-DD HH:mm");
  this.posts.push(post);
};

Posts.prototype.reverseOrder = function() {
  return _(this.posts)
    .sortBy(this.posts, function(p) {
      return p.metadata.date;
    })
    .reverse()
    .value();
};

module.exports = new Posts();
