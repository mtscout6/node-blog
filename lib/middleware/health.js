var health = require('koa-ping');

module.exports = {
  setup: function(app) {
    app.use(health());
  }
};
