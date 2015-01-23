var React = require('react');
var { Link } = require('react-router');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');

var PostEntryDescription = React.createClass({
  render: function() {
    return (
      <Link to='post' params={{post: this.props.urlSlug}}>
        <Row className='blog-post-description'>
          <Col md={2} sm={3} className='text-center'>
            <img className='blog-post-icon' src='/assets/javascript.png' alt='' />
          </Col>
          <Col md={10} sm={9}>
            <span className='h4'>
              <span className='blog-post-description-title'>
                {this.props.title}
              </span>
              <small><em>{this.props.date.format("MMMM D, YYYY")}</em></small>
            </span>
            <br/>
            <span>Sit in soluta dolorem laudantium unde nulla rem soluta id accusantium eius id excepturi. Sunt eius optio esse architecto nisi reiciendis! Sunt nulla blanditiis atque temporibus nostrum. Voluptas asperiores rerum.</span>
          </Col>
        </Row>
        <hr />
      </Link>
    );
  }
});

module.exports = PostEntryDescription;
