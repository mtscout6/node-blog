var React = require('react');
var { DefaultRoute, Route, NotFoundRoute } = require('react-router');

module.exports = () => {
  return [
    <Route name="posts" path="/" handler={require('./components/Shell')}>
      <DefaultRoute handler={require('./components/Home')} />
      <Route name='other' handler={require('./components/Other')} />
      <NotFoundRoute name="not-found" handler={require('./components/NotFound')}/>
    </Route>
  ];
};
