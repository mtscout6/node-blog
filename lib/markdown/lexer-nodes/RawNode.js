var _ = require('lodash');

var replacements = [
  { rgx: /=/g, replacement: '&#61;' }
];

class RawNode {
  constructor(content) {
    this.type = 'raw';
    this.value = _.reduce(replacements, function(acc, r) {
      return acc.replace(r.rgx, r.replacement);
    }, content);
  }

  toString() {
    return this.value;
  }
}

RawNode.matches = function RawNode_matches(str) {
  return true;
};

RawNode.parse = function RawNode_parse(str, lexer) {
  var index = str.indexOf('<');

  if (index < 0) {
    index = str.length;
  }

  var value = str.substring(0,index);
  var remaining = str.substring(index);

  return {
    node: new RawNode(value),
    remaining: remaining
  };
};

module.exports = RawNode;
