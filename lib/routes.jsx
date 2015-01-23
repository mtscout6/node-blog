var React = require('react');
var { DefaultRoute, Route, NotFoundRoute } = require('react-router');

module.exports = () => {
  return [
    <Route path='/' handler={require('./components/Shell')}>
      <Route name='posts' path='/' handler={require('./components/Home')} />
      <Route name='other' handler={require('./components/Other')} />
      <Route name='post' path='blog/:post' handler={require('./components/BlogPost.jsx')} />
      <NotFoundRoute name='not-found' handler={require('./components/NotFound')}/>
    </Route>
  ];
};
