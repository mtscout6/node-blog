var koa = require('koa');
var middleware = require('./middleware');
var app = koa();

app.name = 'blog';

middleware.setup(app);

var port = process.env.PORT || 3000;

app.listen(port);
