var _ = require('lodash');
var CodeNode = require('./lexer-nodes/CodeNode');
var SpanNode = require('./lexer-nodes/SpanNode');
var RawNode = require('./lexer-nodes/RawNode');

var entireCodeBlockReplacements = [
  { rgx: /class="(hljs|lang)/g, replacement: 'className="$1' },
  { rgx: /<br>/g, replacement: '<br />' }
];

var generalInnerCodeBlockReplacements = [
  { rgx: /{/g, replacement: '&#123;' },
  { rgx: /}/g, replacement: '&#125;' },
  { rgx: /\n/g, replacement: '<br />' }
];

var splitterNodes = [
  CodeNode,
  SpanNode,
  RawNode
];

function parseTree(src) {
  var splitter = function splitter(str) {
    var i;

    for (i = 0; i < splitterNodes.length; i++) {
      if (splitterNodes[i].matches(str)) {
        return splitterNodes[i].parse(str, splitter);
      }
    }
  };

  var split = {
    remaining: src
  };
  var rootNodes = [];

  while (split.remaining.length > 0) {
    split = splitter(split.remaining);
    rootNodes.push(split.node);
  }

  var result = _.reduce(rootNodes, function(acc, n) {
    return acc + n.toString();
  }, '');

  return result;
};

function substituteCode(src) {
  var withTreeReplacements = parseTree(src);

  return _.reduce(generalInnerCodeBlockReplacements, function(acc, r) {
    return acc.replace(r.rgx, r.replacement);
  }, withTreeReplacements);
};

function substitute(src) {
  return _.reduce(entireCodeBlockReplacements, function(acc, r) {
    return acc.replace(r.rgx, r.replacement);
  }, src);
};

module.exports = {
  substitute: substitute,
  substituteCode: substituteCode
};
