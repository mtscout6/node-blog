var _ = require('lodash');
var spanBeginning = /^<span class=".*?">/;
var spanEnd = /^<\/span>/;

function SpanNode(prefix) {
  this.type = 'span';
  this.prefix = prefix;
  this.value = [];
  this.postfix = '</span>';
};

SpanNode.prototype.toString = function() {
  var str = _.reduce(this.value, function(acc, v) {
    return acc + v.toString();
  }, this.prefix);

  return str + this.postfix;
}

SpanNode.matches = function SpanNode_matches(str) {
  return spanBeginning.test(str)
};

SpanNode.parse = function SpanNode_parse(str, lexer) {
  var index = str.indexOf('>') + 1;
  var prefix = str.substring(0,index);
  var remaining = str.substring(index);

  var nextNode = new SpanNode(prefix);

  while (remaining.length > 0 && !spanEnd.test(remaining)) {
    childSplit = lexer(remaining);
    remaining = childSplit.remaining;
    nextNode.value.push(childSplit.node);
  }

  index = remaining.indexOf('>') + 1;

  return {
    node: nextNode,
    remaining: remaining.substring(index)
  };
};

module.exports = SpanNode;
