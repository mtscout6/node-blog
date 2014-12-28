var React = require('react');

var writeState = function(state) {
  return "window.App = " + JSON.stringify(state);
}

var Html = React.createClass({
  render: function() {
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <title>Blog</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
        </body>
      </html>
    );
  }
});

module.exports = Html;
