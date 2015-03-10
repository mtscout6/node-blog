import logger from 'koa-logger';

export default {
  setup(app) {
    app.use(logger());
  }
};
