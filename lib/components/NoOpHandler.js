import React from 'react';
import { RouteHandler } from 'react-router';

const NoOpHandler = React.createClass({
  render() {
    return <RouteHandler {...this.props} />;
  }
});

export default NoOpHandler;

