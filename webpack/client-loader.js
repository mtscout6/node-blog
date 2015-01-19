var fs= require('fs');
var path = require('path');

module.exports = function(source) {
  var extension = path.extname(this.resourcePath);
  var basename = path.basename(this.resourcePath, extension);
  var dirname = path.dirname(this.resourcePath);

  var clientPath = path.join(dirname, basename + '.client' + extension);

  if (fs.existsSync(clientPath)) {
    var src = fs.readFileSync(clientPath, 'utf-8');
    return src;
  }

  return source;
};
