var React = require('react');
var Button = require('react-bootstrap/Button');

var ContactBanner = React.createClass({
  render: function() {
    return (
      <div className='blog-contact-banner'>
        <h2>
          Follow Me
          <div className='btn-group-social'>
            <Button className='btn-twitter'><i className="fa fa-twitter fa-lg"></i> Twitter</Button>
            <Button className='btn-google-plus'><i className="fa fa-google-plus fa-lg"></i> Google+</Button>
            <Button className='btn-github'><i className="fa fa-github fa-lg"></i> github</Button>
            <Button className='btn-youtube'><i className="fa fa-youtube fa-lg"></i> YouTube</Button>
            <Button className='btn-linkedin'><i className="fa fa-linkedin-square fa-lg"></i> LinkedIn</Button>
            <Button className='btn-stack-overflow'><i className="fa fa-stack-overflow fa-lg"></i> StackOverflow</Button>
            <Button className='btn-gmail'><i className="fa fa-google fa-lg"></i> Gmail</Button>
          </div>
        </h2>
      </div>
    );
  }
});

module.exports = ContactBanner;
