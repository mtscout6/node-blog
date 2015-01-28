var path = require('path');
var yaml = require('yaml-front-matter');
var toJsx = require('./to-jsx');

function parse(source, filename) {
  var metadata = yaml.loadFront(source);
  metadata.__rawComponent = toJsx(metadata.__content, metadata.dependencies);
  delete metadata.__content;
  metadata.urlSlug = metadata.urlSlug || path.basename(filename, path.extname(filename));
  return metadata;
};

module.exports = parse;
