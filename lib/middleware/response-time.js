import responseTime from 'koa-response-time';

export default {
  setup(app) {
    app.use(responseTime());
  }
}
