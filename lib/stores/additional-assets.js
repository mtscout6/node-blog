var proxies = require('../chunks');

function AdditionalAssets() {
  this.scripts = [];
};

AdditionalAssets.prototype.addScript = function addScript(script) {
  var proxy = proxies[script];
  this.scripts.push(proxy);
};

module.exports = AdditionalAssets;
