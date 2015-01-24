//polyfills so require.ensure and require.include work in node.js (since they are meant for the browser)
if(typeof require.ensure !== 'function') {
  require.ensure = function(d, c) { c(require) };
}
if(typeof require.include !== 'function') {
  require.include = function() {};
}

var React = require('react');
var moment = require('moment');
var component;

var desc = {
  contextTypes: {
    assets: React.PropTypes.object
  },

  loadComponent: function(callback) {
    if(!component) {
      require.ensure([], function() {
        if (this.context && this.context.assets) {
          this.context.assets.addScript(##NORMALIZED-MODULE-REQUEST##);
        }

        component = require(##MODULE-REQUEST##);
        if(callback) callback(component);
      }.bind(this));
    } else if(callback) callback(component);
    return component;
  }
};

var mixinReactProxy = require(##REACT-PROXY-PATH##);
mixinReactProxy(React, desc);
module.exports = React.createClass(desc);
module.exports.Mixin = desc;
module.exports.metadata = ##METADATA##;

module.exports.metadata.date = moment(module.exports.metadata.date, "YYYY-MM-DD HH:mm");
