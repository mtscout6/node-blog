import React from 'react';
import CSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { State } from 'react-router';
import Grid from 'react-bootstrap/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PageContent = React.createClass({
  mixins: [ State ],

  render() {
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

export default PageContent;
