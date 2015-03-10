import React from 'react';
import { RouteHandler } from 'react-router';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import PageFooter from './PageFooter';

const Shell = React.createClass({
  render() {
    return (
      <div>
        <PageHeader />
        <PageContent>
          <RouteHandler />
        </PageContent>
        <PageFooter />
      </div>
    );
  }
});

export default Shell;
