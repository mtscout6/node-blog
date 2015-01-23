var React = require('react');
var { RouteHandler } = require('react-router');
var PageHeader = require('./PageHeader');
var PageContent = require('./PageContent');
var PageFooter = require('./PageFooter');

var Shell = React.createClass({
  render: function() {
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

module.exports = Shell;
