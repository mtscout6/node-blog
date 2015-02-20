var _ = require('lodash');
var fs = require('fs');
var parse = require('./parse');
var proxyBuilder = require('./proxy-builder');

var RequestShortener = require('webpack/lib/RequestShortener');
var requestShortener = new RequestShortener(process.cwd());

module.exports = function () {};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  var filename = _.last(remainingRequest.split('!'));
  var moduleRequest = '!!' + remainingRequest;
  var moduleName = moduleRequest.split('!');
  var src, metadata;

  if (this.cacheable) {
    this.cacheable();
  }

  moduleName = moduleName[moduleName.length - 1];
  moduleName = requestShortener.shorten(moduleName);
  src = fs.readFileSync(filename, 'utf-8');
  metadata = parse(src, filename);

  return proxyBuilder(moduleRequest, moduleName, metadata);
};
