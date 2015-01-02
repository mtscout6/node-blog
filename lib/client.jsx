require('./styles/index.less');
var React = require('react');
var Router = require('react-router');
var getRoutes = require('./routes');

document.addEventListener('DOMContentLoaded', function () {
  var renderState = {
    element: document.getElementById('app'),
    Handler: null,
    routerState: null
  };

  var render = () => {
    var { element, Handler, routerState } = renderState;
    React.render(<Handler />, element);
  };

  Router.run(getRoutes(), Router.HistoryLocation, function(Handler, routerState) {
    renderState.Handler = Handler;
    renderState.routerState = routerState;
    render();
  });
});
