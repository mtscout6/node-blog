var React = require('react');

var writeState = function(state) {
  return "window.App = " + JSON.stringify(state);
}

var Html = React.createClass({
  render() {
    var additionalScripts = this.props.scripts.map((s, index) => {
      return <script src={s} key={index}></script>;
    });

    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <script src="/assets/commons.js"></script>
          {additionalScripts}
          <script src="/assets/main.js"></script>
          <title>Matt Smith's Blog</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
        </body>
      </html>
    );
  }
});

module.exports = Html;
