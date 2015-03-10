import './styles/index.less';
import 'highlight.js/styles/github.css';

import React from 'react';
import Router from 'react-router';
import getRoutes from './routes';

document.addEventListener('DOMContentLoaded', () => {
  var renderState = {
    element: document.getElementById('app'),
    Handler: null,
    routerState: null
  };

  var render = () => {
    var { element, Handler, routerState } = renderState;
    React.render(<Handler />, element);
  };

  Router.run(getRoutes(), Router.HistoryLocation, (Handler, routerState) => {
    renderState.Handler = Handler;
    renderState.routerState = routerState;
    render();
  });
});
