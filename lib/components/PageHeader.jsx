var React = require('react');
var Navigation = require('./Navigation');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');

var PageHeader = React.createClass({
  render: function () {
    return (
      <div className='blog-page-header'>
        <Navigation />
        <div className='masthead'>
          <Grid>
            <Row>
              <Col xs={12} md={8}>
                <h1>Matt Smith's Blog</h1>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className='top-spacer'> </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
});

module.exports = PageHeader;
