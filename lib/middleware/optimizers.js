import gzip from 'koa-gzip';
import fresh from 'koa-fresh';
import etag from 'koa-etag';

export default {
  setup(app) {
    app.use(gzip());
    app.use(fresh());
    app.use(etag());
  }
}
