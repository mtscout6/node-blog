var _ = require('lodash');
var marked = require('marked');
var path = require('path');
var fs = require('fs');
var templatePath = path.join(__dirname, 'MarkdownComponent.template.js');
var template = fs.readFileSync(templatePath, 'utf-8');
var markdownPlaceholderRgx = /##MARKDOWN-AS-HTML##/;
var dependenciesRgx = /##REQUIRE##/;
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
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code, lang) {
    var highlighted = hljs.highlight(lang, code).value.trim('\n').trim('\r');
    return substitutions.substituteCode(highlighted);
  }
});

function markdownToJsx(content, dependencies) {
  dependencies = dependencies || [];
  var html = marked(content);
  var substituted = substitutions.substitute(html);

  var dependencyCalls = dependencies.reduce(function(acc, dep) {
    return acc + "var LocalImage = require('" + dep + "');\n"
  }, '');

  var js = template.replace(markdownPlaceholderRgx, substituted)
    .replace(dependenciesRgx, dependencyCalls);

  return js;
};

module.exports = markdownToJsx;
