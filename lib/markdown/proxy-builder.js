var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var parse = require('./parse');
var reactProxyPath = require.resolve('react-proxy-loader/mixinReactProxy');
var reactProxyPathRgx = /##REACT-PROXY-PATH##/g;

var proxyTemplatePath = path.join(__dirname, 'MarkdownProxy.template.js');
var proxyTemplate = fs.readFileSync(proxyTemplatePath, 'utf-8')
  .replace(reactProxyPathRgx, JSON.stringify(reactProxyPath));

var moduleRequestRgx = /##MODULE-REQUEST##/g;
var normalizedModuleRequestRgx = /##NORMALIZED-MODULE-REQUEST##/g;
var metadataRgx = /##METADATA##/g;

module.exports = function MarkdownProxyBuilder(hashedModule, moduleName, metadata) {
  delete metadata.__rawComponent;
  return proxyTemplate.replace(moduleRequestRgx, JSON.stringify(hashedModule))
    .replace(normalizedModuleRequestRgx, JSON.stringify(moduleName))
    .replace(metadataRgx, JSON.stringify(metadata));
};
