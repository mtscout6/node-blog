var fs = require('fs');
var React = require('react-tools');
var parse = require('./parse');

var installed = false;

function install(options) {
  if (installed) {
    return;
  }

  options = options || {};

  // Import everything in the transformer codepath before we add the import hook
  React.transform('', options);

  require.extensions['.md'] = function(module, filename) {
    var content;
    var src = fs.readFileSync(filename, {encoding: 'utf8'});
    var metadata = parse(src);

    try {
      content = React.transform(metadata.__rawComponent, options);
    } catch (e) {
      throw new Error('Error transforming ' + filename + ' to JSX: ' + e.toString());
    }
    module._compile(content, filename);
  };

  installed = true;
}

module.exports = {
  install: install
};
