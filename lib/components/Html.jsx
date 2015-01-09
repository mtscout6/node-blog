var React = require('react');

var writeState = function(state) {
  return "window.App = " + JSON.stringify(state);
}

var Html = React.createClass({
  render: function() {
    var additionalScripts = this.props.scripts.map(function(s, index) {
      return <script src={s} key={index}></script>;
    });

    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <script src="/assets/commons.js"></script>
          {additionalScripts}
          <script src="/assets/main.js"></script>
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
