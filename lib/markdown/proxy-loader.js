var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var parse = require('./parse');
var proxyBuilder = require('./proxy-builder');

var RequestShortener = require('webpack/lib/RequestShortener');
var requestShortener = new RequestShortener(process.cwd());

module.exports = function () {};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  this.cacheable && this.cacheable();
  var file = _.last(remainingRequest.split('!'));
  var moduleRequest = '!!' + remainingRequest;
  var moduleName = moduleRequest.split('!');
  moduleName = moduleName[moduleName.length-1];
  moduleName = requestShortener.shorten(moduleName);
  var src = fs.readFileSync(file, 'utf-8');
  var metadata = parse(src);

  return proxyBuilder(moduleRequest, moduleName, metadata);
};
