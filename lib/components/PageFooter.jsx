var React = require('react');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Well = require('react-bootstrap/Well');
var Navbar = require('react-bootstrap/Navbar');
var ContactBanner = require('./ContactBanner');

var PageFooter = React.createClass({
  render: function() {
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

module.exports = PageFooter;
