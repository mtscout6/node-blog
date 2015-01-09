var gzip = require('koa-gzip');
var fresh = require('koa-fresh');
var etag = require('koa-etag');

module.exports = {
  setup: function(app) {
    app.use(gzip());
    app.use(fresh());
    app.use(etag());
  }
}
