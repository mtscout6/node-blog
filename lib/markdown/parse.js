var yaml = require('yaml-front-matter');
var toJsx = require('./to-jsx');

function parseMarkdown(source) {
  var metadata = yaml.loadFront(source);
  metadata.__rawComponent = toJsx(metadata.__content);
  return metadata;
};

module.exports = parseMarkdown;
