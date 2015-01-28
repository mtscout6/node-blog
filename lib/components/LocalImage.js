var React = require('react');
var images = require('../images');

var LocalImage = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string,
    className: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      alt: '',
      className: ''
    };
  },

  render() {
    return (
      <img
        alt={this.props.alt}
        className={this.props.className}
        src={images['./' + this.props.src]}
      />
    );
  }
});

module.exports = LocalImage;
