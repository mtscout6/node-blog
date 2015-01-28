var logger = require('koa-logger');

module.exports = {
  setup(app) {
    app.use(logger());
  }
};
