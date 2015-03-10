import path from 'path';
import staticFiles from 'koa-static';
import favicon from 'koa-favicon';

export default {
  setup(app) {
    var faviconPath = path.join(__dirname, '../images/favicon.png');
    app.use(favicon(faviconPath));
    app.use(staticFiles('public'));
  }
};
