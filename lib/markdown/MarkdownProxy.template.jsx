var React = require("react");
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
  },
};

var mixinReactProxy = require(##REACT-PROXY-PATH##);
mixinReactProxy(React, desc);
module.exports = React.createClass(desc);
module.exports.Mixin = desc;
