var React = require('react');
var Router = require('react-router');
var getRoutes = require('./routes');

var Cancellation = require('react-router/modules/utils/Cancellation');
var Redirect = require('react-router/modules/utils/Redirect');

var Html = React.createFactory(require('./components/Html'));

module.exports = function *routingMiddleware(next) {
  var ctx = this;

  var router = Router.create({
    routes: getRoutes(),
    location: ctx.url,
    onAbort: function serverSideAbort(abortReason, location) {
      if (abortReason instanceof Cancellation) {
        return;
      } else if (abortReason instanceof Redirect) {
        var path = this.makePath(abortReason.to, abortReason.params, abortReason.query);
        ctx.response.redirect(path);
      } else {
        throw 'TODO: Unhandled server abort'
      }
    }
  });

  router.run(function (handler, state) {
    var component = React.createFactory(handler);
    var componentInstance = component();

    var html = React.renderToStaticMarkup(
      Html({
        markup: React.renderToString(componentInstance)
      })
    );

    ctx.response.body = '<!DOCTYPE html>' + html;
  });

  yield* next;
};
