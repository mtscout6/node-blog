var _ = require('lodash');
var walk = require('./walk-dir');

global.context_shim = function(dir, recursive, pattern) {
  var files = walk(__dirname, pattern);

  var result = function(post) {
    return require(result[post]);
  };

  files.reduce(function(acc, f) {
    acc[f] = f;
    return acc;
  }, result);

  result.keys = function() {
    return Object.keys(result).filter(function(k) { return k !== 'keys'; });
  };

  return result;
};
