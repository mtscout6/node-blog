var path = require('path');
var staticFiles = require('koa-static');
var favicon = require('koa-favicon');

module.exports = {
  setup: function(app) {
    var faviconPath = path.join(__dirname, '../images/favicon.png');
    app.use(favicon(faviconPath));
    app.use(staticFiles('public'));
  }
};
