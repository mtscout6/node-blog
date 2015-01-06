var _ = require('lodash');
var marked = require('marked');
var path = require('path');
var fs = require('fs');
var templatePath = path.join(__dirname, 'MarkdownComponent.template.jsx');
var template = fs.readFileSync(templatePath, 'utf-8');
var markdownPlaceholderRgx = /##MARKDOWN-AS-HTML##/;
var substitutions = require('./markdown-replacements');

var hljs = require('highlight.js');
var renderer = new marked.Renderer();
var originalCodeSpan = renderer.codespan;

renderer.codespan = function(code) {
  return substitutions.substituteCode(originalCodeSpan(code));
};

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function(code, lang) {
    var highlighted = hljs.highlight(lang, code).value.trim('\n').trim('\r');
    return substitutions.substituteCode(highlighted);
  }
});

function markdownToJsx(content) {
  var html = marked(content);
  var substituted = substitutions.substitute(html);
  var jsx = template.replace(markdownPlaceholderRgx, substituted);
  return jsx;
};

module.exports = markdownToJsx;
