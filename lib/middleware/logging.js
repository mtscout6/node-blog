var logger = require('koa-logger');

module.exports = {
  setup: function LoggingMiddleware(app) {
    app.use(logger());
  }
};
