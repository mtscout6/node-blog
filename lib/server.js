var koa = require('koa');
var gzip = require('koa-gzip');
var fresh = require('koa-fresh');
var etag = require('koa-etag');
var staticFiles = require('koa-static');
var app = koa();

app.use(gzip());
app.use(fresh());
app.use(etag());

// x-response-time
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(staticFiles('public'));

app.use(require('./routing-middleware'));

app.listen(3000);
