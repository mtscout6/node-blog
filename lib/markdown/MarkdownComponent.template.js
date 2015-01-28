var React = require('react');
console.log('template dir');
console.log(__dirname);
##REQUIRE##

MarkdownComponent = React.createClass({
  render() {
    return (
      <div className='markdown-component'>
        ##MARKDOWN-AS-HTML##
      </div>
    );
  }
});

module.exports = MarkdownComponent;
