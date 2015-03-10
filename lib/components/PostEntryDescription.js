import React from 'react';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocalImage from './LocalImage';

const PostEntryDescription = React.createClass({
  propTypes: {
    divider: React.PropTypes.bool
  },

  render() {
    return (
      <div className='blog-post-description'>
        <Link to='post' params={{post: this.props.urlSlug}}>
          <Row>
            <Col md={2} sm={3} className='text-center'>
              <LocalImage className='blog-post-icon' src='javascript.png' />
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
        </Link>
        { this.props.divider ? <hr /> : null }
      </div>
    );
  }
});

export default PostEntryDescription;
