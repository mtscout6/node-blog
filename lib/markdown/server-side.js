var fs = require('fs');
var path = require('path');
var React = require('react-tools');
var parse = require('./parse');
var proxyBuilder = require('./proxy-builder');
var crypto = require('crypto');
var Module = require('module');

var installed = false;

var markdownCache = { };

var originalFindPath = Module._findPath;

// Apply wrapper around default node _findPath so I can
// inject our in memory non-proxied component.
Module._findPath = function(request, paths) {
  if (/\.mdcache/.test(request)) {
    return request;
  }

  return originalFindPath(request, paths);
};

function transform(src, options, filename, isProxy) {
  try {
    return React.transform(src, options);
  } catch (e) {
    var proxyStr = isProxy ? ' proxy' : '';
    throw new Error('Error transforming ' + filename + proxyStr + ' from JSX: ' + e.toString());
  }
};

function install(options) {
  if (installed) {
    return;
  }

  options = options || {};

  // Import everything in the transformer codepath before we add the import hook
  React.transform('', options);

  require.extensions['.mdcache'] = function(module, filename) {
    module._compile(markdownCache[filename], filename);
  };

  require.extensions['.md'] = function(module, filename) {
    var hash = require('crypto').createHash('md5');
    var src = fs.readFileSync(filename, {encoding: 'utf8'});
    var metadata = parse(src, filename);
    var content = transform(metadata.__rawComponent, options, filename);

    hash.update(filename);
    var modifiedFilename = path.join(
      path.dirname(filename),
      hash.digest('hex') + '.mdcache');

    // Put into cache for the jscache extension loader to apply.
    markdownCache[modifiedFilename] = content;

    var moduleName = './' + path.relative(process.cwd(), filename);
    var proxySrc = proxyBuilder(modifiedFilename, moduleName, metadata);
    var proxy = transform(proxySrc, options, filename, true);

    module._compile(proxy, filename);
  };

  installed = true;
}

module.exports = {
  install: install
};
