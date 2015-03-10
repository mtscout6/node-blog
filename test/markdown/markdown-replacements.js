import substitutions from '../../lib/markdown/markdown-replacements';

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
    substitutions.substituteCode(html).should.equal('<span className="blah">&#61;</span>')
  });

  it('replaces = with html code (inside span advanced)', function() {
    var html = '<span class="blah">=</span><span class="blah">=</span>';
    substitutions.substituteCode(html).should.equal('<span className="blah">&#61;</span><span className="blah">&#61;</span>')
  });

  it('replaces = with html code (outside span)', function() {
    var html =
      '<span class="blah"></span>=<span class="blah"></span>';
    substitutions.substituteCode(html).should.equal(
      '<span className="blah"></span>&#61;<span className="blah"></span>')
  });

  it('replaces = with html code (outside span advanced)', function() {
    var html =
      '<span class="blah">=</span>=<span class="blah">=</span>';
    substitutions.substituteCode(html).should.equal(
      '<span className="blah">&#61;</span>&#61;<span className="blah">&#61;</span>')
  });

  it('replaces = with html code (nested span)', function() {
    var html =
      '<span class="blah"><span class="blah">=</span></span>';
    substitutions.substituteCode(html).should.equal(
      '<span className="blah"><span className="blah">&#61;</span></span>')
  });

  it('replaces \\n with <br />', function() {
    var html =
      '<span class="blah"></span>\n<span class="blah"></span>';
    substitutions.substituteCode(html).should.equal(
      '<span className="blah"></span><br /><span className="blah"></span>')
  });
});
