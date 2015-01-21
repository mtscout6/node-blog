var React = require('react');
var CSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var { State } = require('react-router');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');

var PageContent = React.createClass({
  mixins: [ State ],

  render: function() {
    return (
      <div className='blog-page-content'>
        <Grid>
          <Row>
            <Col className='content-panel' md={12}>
              <CSSTransitionGroup transitionName='transition-page-content'>
                <div className='inner-content-panel' key={this.getPath()}>
                  {this.props.children}
                </div>
              </CSSTransitionGroup>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = PageContent;
