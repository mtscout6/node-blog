import React from 'react';
import { DefaultRoute, Route, NotFoundRoute } from 'react-router';

export default () => {
  return [
    <Route path='/' handler={require('./components/Shell')}>
      <Route name='posts' path='/' handler={require('./components/Home')} />
      <Route name='other' handler={require('./components/Other')} />
      <Route name='post' path='blog/:post' handler={require('./components/BlogPost')} />
      <Route name='about-me' handler={require('./components/AboutMe')} />
      <NotFoundRoute name='not-found' handler={require('./components/NotFound')}/>
    </Route>
  ];
};
