var React = require('react');
var { DefaultRoute, Route, NotFoundRoute } = require('react-router');

module.exports = () => {
  return [
    <Route path='/' handler={require('./components/Shell')}>
      <Route name='posts' path='/' handler={require('./components/Home')} />
      <Route name='other' handler={require('./components/Other')} />
      <Route path='blog' handler={require('./components/NoOpHandler')}>
        <Route name='blog-post' handler={require('../posts/test')} />
        <Route name='blog-post2' handler={require('../posts/test2')} />
      </Route>
      <NotFoundRoute name='not-found' handler={require('./components/NotFound')}/>
    </Route>
  ];
};
