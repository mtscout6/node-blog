var parse = require('./parse');

module.exports = function(source) {
  return parse(source).__rawComponent;
};
