var staticFiles = require('koa-static');
var favicon = require('koa-favicon');

module.exports = {
  setup: function(app) {
    app.use(favicon(__dirname + '../images/favicon.png'));
    app.use(staticFiles('public'));
  }
};
