var proxy = require('react-proxy-loader/mixinReactProxy');

module.exports = function(React, desc, moduleName) {
  desc.statics = {
    willTransitionTo: function(transition) {
      if (transition.context && transition.context.assets) {
        transition.context.assets.addScript(moduleName);
      }
    }
  }

  return proxy(React, desc);
};


