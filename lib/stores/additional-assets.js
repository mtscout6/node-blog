var moduleToChunk = require('../chunks');

function AdditionalAssets() {
  this.scripts = [];
};

AdditionalAssets.prototype.addScript = function addScript(script) {
  var chunks = moduleToChunk[script];
  chunks.forEach(c => this.scripts.push(c));
};

module.exports = AdditionalAssets;
