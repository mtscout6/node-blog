var React = require('react');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');

var PageContent = React.createClass({
  render: function() {
    return (
      <div className='blog-page-content'>
        <Grid>
          <Row>
            <Col md={12}>
              <div className='content-panel'>
                {this.props.children}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = PageContent;
