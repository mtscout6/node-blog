import React from 'react';
import Navigation from './Navigation';
import Grid from 'react-bootstrap/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PageHeader = React.createClass({
  render() {
    return (
      <div className='blog-page-header'>
        <Navigation />
        <div className='masthead'>
          <Grid>
            <Row>
              <Col md={12}>
                <h1>Matt Smith's Blog</h1>
              </Col>
            </Row>
            <Row>
              <Col className='top-spacer' md={12}></Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
});

export default PageHeader;
