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
  loadComponent: function(callback) {
    if(!component) {
      require.ensure([], function() {
        component = require(##MODULE-REQUEST##);
        if(callback) callback(component);
      });
    } else if(callback) callback(component);
    return component;
  }
};

var mixinReactProxy = require(##REACT-PROXY-PATH##);
mixinReactProxy(React, desc, ##NORMALIZED-MODULE-REQUEST##);
module.exports = React.createClass(desc);
module.exports.Mixin = desc;
module.exports.metadata = ##METADATA##;

module.exports.metadata.date = moment(module.exports.metadata.date, "YYYY-MM-DD HH:mm");
