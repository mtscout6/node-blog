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
    var content;
    var src = fs.readFileSync(filename, {encoding: 'utf8'});
    var metadata = parse(src, filename);

    try {
      content = React.transform(metadata.__rawComponent, options);
    } catch (e) {
      throw new Error('Error transforming ' + filename + ' from JSX: ' + e.toString());
    }

    var hash = require('crypto').createHash('md5');
    hash.update(filename);
    var modifiedFilename = path.join(__dirname, hash.digest('hex') + '.mdcache');

    // Put into cache for the jscache extension loader to apply.
    markdownCache[modifiedFilename] = content;

    var moduleName = './' + path.relative(process.cwd(), filename);
    var proxy = proxyBuilder(modifiedFilename, moduleName, metadata);

    try {
      proxy = React.transform(proxy, options);
    } catch (e) {
      throw new Error('Error transforming ' + filename + ' proxy from JSX: ' + e.toString());
    }

    module._compile(proxy, filename);
  };

  installed = true;
}

module.exports = {
  install: install
};
