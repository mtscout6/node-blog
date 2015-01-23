var parse = require('./parse');

module.exports = function(source) {
  return parse(source, this.resourcePath).__rawComponent;
};
