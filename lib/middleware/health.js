// https://uptimerobot.com/
var health = require('koa-ping');

module.exports = {
  setup(app) {
    app.use(health());
  }
};
