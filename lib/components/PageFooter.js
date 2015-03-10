import React from 'react';
import Grid from 'react-bootstrap/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Well from 'react-bootstrap/Well';
import Navbar from 'react-bootstrap/Navbar';
import ContactBanner from './ContactBanner';

const PageFooter = React.createClass({
  render() {
    return (
      <footer className='blog-page-footer'>
        <div className='contact-info'>
          <Grid>
            <Row>
              <Col md={12}>
                <ContactBanner />
              </Col>
            </Row>
          </Grid>
        </div>
        <div className='bottom-anchor'>
          <Grid>
            <Row>
              <Col md={6}>Footer</Col>
              <Col md={6}>
                <span className='pull-right'>
                  <i className='fa fa-copyright'></i> 2012-{new Date().getFullYear()}
                </span>
              </Col>
            </Row>
          </Grid>
        </div>
      </footer>
    );
  }
});

export default PageFooter;
