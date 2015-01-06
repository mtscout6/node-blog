var substitutions = require('../../lib/markdown/markdown-replacements');

describe('markdown replacements', function() {
  it('replaces { with html code', function() {
    var html = 'test {';
    substitutions.substituteCode(html).should.equal('test &#123;')
  });

  it('replaces } with html code', function() {
    var html = 'test }';
    substitutions.substituteCode(html).should.equal('test &#125;')
  });

  it('replaces = with html code (inside span)', function() {
    var html = '<span class="blah">=</span>';
    substitutions.substituteCode(html).should.equal('<span class="blah">&#61;</span>')
  });

  it('replaces = with html code (inside span advanced)', function() {
    var html = '<span class="blah">=</span><span class="blah">=</span>';
    substitutions.substituteCode(html).should.equal('<span class="blah">&#61;</span><span class="blah">&#61;</span>')
  });

  it('replaces = with html code (outside span)', function() {
    var html =
      '<span class="blah"></span>=<span class="blah"></span>';
    substitutions.substituteCode(html).should.equal(
      '<span class="blah"></span>&#61;<span class="blah"></span>')
  });

  it('replaces = with html code (outside span advanced)', function() {
    var html =
      '<span class="blah">=</span>=<span class="blah">=</span>';
    substitutions.substituteCode(html).should.equal(
      '<span class="blah">&#61;</span>&#61;<span class="blah">&#61;</span>')
  });

  it('replaces = with html code (nested span)', function() {
    var html =
      '<span class="blah"><span class="blah">=</span></span>';
    substitutions.substituteCode(html).should.equal(
      '<span class="blah"><span class="blah">&#61;</span></span>')
  });

  it('replaces \\n with <br />', function() {
    var html =
      '<span class="blah"></span>\n<span class="blah"></span>';
    substitutions.substituteCode(html).should.equal(
      '<span class="blah"></span><br /><span class="blah"></span>')
  });
});
