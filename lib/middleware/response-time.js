var responseTime = require('koa-response-time');

module.exports = {
  setup(app) {
    app.use(responseTime());
  }
}
