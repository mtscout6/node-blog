var React = require('react');
var Button = require('react-bootstrap/Button');

var ContactBanner = React.createClass({
  render: function() {
    return (
      <div className='blog-contact-banner'>
        <h2>
          Follow Me
          <div className='btn-group-social'>
            <Button className='btn-twitter'
              href='https://twitter.com/mtscout6'>
              <i className="fa fa-twitter fa-lg fa-fw"></i> Twitter
            </Button>
            <Button className='btn-google-plus'
              href='https://plus.google.com/117095540675475103735?rel=author'>
              <i className="fa fa-google-plus fa-lg fa-fw"></i> Google+
            </Button>
            <Button className='btn-github'
              href='https://github.com/mtscout6'>
              <i className="fa fa-github fa-lg fa-fw"></i> GitHub
            </Button>
            <Button className='btn-youtube'
              href='https://www.youtube.com/channel/UCKXLQhaR0jY76UTFKuO_RcQ'>
              <i className="fa fa-youtube fa-lg fa-fw"></i> YouTube
            </Button>
            <Button className='btn-linkedin'
              href='http://www.linkedin.com/pub/matthew-smith/21/a11/905'>
              <i className="fa fa-linkedin-square fa-lg fa-fw"></i> LinkedIn
            </Button>
            <Button className='btn-stack-overflow'
              href='http://stackoverflow.com/users/1188162/matt-smith'>
              <i className="fa fa-stack-overflow fa-lg fa-fw"></i> StackOverflow
            </Button>
            <Button className='btn-gmail'
              href='mailto:mtscout6@gmail.com'>
              <i className="fa fa-google fa-lg fa-fw"></i> Gmail
            </Button>
          </div>
        </h2>
      </div>
    );
  }
});

module.exports = ContactBanner;
