var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var parse = require('./parse');
var reactProxyPath = require.resolve('react-proxy-loader/mixinReactProxy');
var reactProxyPathRgx = /##REACT-PROXY-PATH##/;

var proxyTemplatePath = path.join(__dirname, 'MarkdownProxy.template.jsx');
var proxyTemplate = fs.readFileSync(proxyTemplatePath, 'utf-8')
  .replace(reactProxyPathRgx, JSON.stringify(reactProxyPath));

var moduleRequestRgx = /##MODULE-REQUEST##/;

module.exports = function () {};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  this.cacheable && this.cacheable();
  var file = _.last(remainingRequest.split('!'));
  var moduleRequest = '!!' + remainingRequest;
  console.log(file);
  var src = fs.readFileSync(file, 'utf-8');
  var metadata = parse(src);
  _.assign(data, metadata);
  delete metadata.__rawComponent;
  return proxyTemplate.replace(moduleRequestRgx, JSON.stringify(moduleRequest));
};
