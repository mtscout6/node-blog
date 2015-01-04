var markdown = require('markdown').markdown.toHTML;
var path = require('path');
var fs = require('fs');
var templatePath = path.join(__dirname, 'MarkdownComponent.template.jsx');
var template = fs.readFileSync(templatePath, 'utf-8');
var markdownPlaceholderRgx = /##MARKDOWN-AS-HTML##/;

function markdownToJsx(content) {
  var html = markdown(content);
  return template.replace(markdownPlaceholderRgx, html);
};

module.exports = markdownToJsx;
