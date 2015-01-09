var koa = require('koa');
var middleware = require('./middleware');
var app = koa();

app.name = 'blog';

middleware.setup(app);

app.listen(3000);
