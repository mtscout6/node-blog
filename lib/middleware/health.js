// https://uptimerobot.com/
import health from 'koa-ping';

export default {
  setup(app) {
    app.use(health());
  }
};
