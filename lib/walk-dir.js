var path = require('path');
var fs = require('fs');

function walkDir(dir, pattern) {
  var results = [];
  var contents = fs.readdirSync(dir);

  contents.forEach(function(file) {
    file = path.join(dir, file)
    var stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {
      subDirFiles = walkDir(file, pattern);
      results = results.concat(subDirFiles);
    } else {
      if (pattern.test(file)) {
        results.push(file);
      }
    }
  });

  return results;
};

module.exports = walkDir;

