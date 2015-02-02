var React = require('react');
##REQUIRE##

var MarkdownComponent = React.createClass({
  render: function() {
    return (
      <div className='markdown-component'>
        ##MARKDOWN-AS-HTML##
      </div>
    );
  }
});

module.exports = MarkdownComponent;
