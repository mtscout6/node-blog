var _ = require('lodash');
var codeBeginning = /^<code( class=".*?")?>/;
var codeEnd = /^<\/code>/;

function CodeNode(prefix) {
  this.type = 'code';
  this.prefix = prefix;
  this.value = [];
  this.postfix = '</code>';
};

CodeNode.prototype.toString = function() {
  var fixedPrefix = this.prefix.replace(/class/, 'className');
  var str = _.reduce(this.value, function(acc, v) {
    return acc + v.toString();
  }, fixedPrefix);

  return str + this.postfix;
}

CodeNode.matches = function CodeNode_matches(str) {
  return codeBeginning.test(str)
};

CodeNode.parse = function CodeNode_parse(str, lexer) {
  var childSplit;
  var index = str.indexOf('>') + 1;
  var prefix = str.substring(0,index);
  var remaining = str.substring(index);

  var nextNode = new CodeNode(prefix);

  while (remaining.length > 0 && !codeEnd.test(remaining)) {
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

module.exports = CodeNode;
