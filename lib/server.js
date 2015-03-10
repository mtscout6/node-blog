import koa from 'koa';
import middleware from './middleware';
let app = koa();

app.name = 'blog';

middleware.setup(app);

let port = process.env.PORT || 3000;

app.listen(port);
