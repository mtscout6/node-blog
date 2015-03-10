import React from 'react';
import Router from 'react-router';
import getRoutes from '../routes';

import Cancellation from 'react-router/modules/utils/Cancellation';
import Redirect from 'react-router/modules/utils/Redirect';

import AdditionalAssets from '../stores/additional-assets';

import HtmlImport from '../components/Html';
const Html = React.createFactory(HtmlImport);

function *routingMiddleware(next) {
  var ctx = this;

  var context = {
    assets: new AdditionalAssets()
  }

  var router = Router.create({
    routes: getRoutes(),
    location: ctx.url,
    transitionContext: context,
    onAbort(abortReason, location) {
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

  router.run((handler, state) => {
    var component = React.createFactory(handler);
    var componentInstance = React.withContext(context, function() {
      return component();
    });

    var html = React.renderToStaticMarkup(
      Html({
        markup: React.renderToString(componentInstance),
        scripts: context.assets.scripts
      })
    );

    ctx.response.body = '<!DOCTYPE html>' + html;
  });

  yield* next;
};

export default {
  setup(app) {
    app.use(routingMiddleware);
  }
};
