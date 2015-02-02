var React = require('react');
##REQUIRE##

var MarkdownComponent = React.createClass({
  render() {
    return (
      <div className='markdown-component'>
        ##MARKDOWN-AS-HTML##
      </div>
    );
  }
});

module.exports = MarkdownComponent;
