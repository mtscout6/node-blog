var responseTime = require('koa-response-time');

module.exports = {
  setup: function(app) {
    app.use(responseTime());
  }
}
