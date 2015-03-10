import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItemLink from 'react-router-bootstrap/lib/NavItemLink';

const Navigation = React.createClass({
  render() {
    return (
      <Navbar
        componentClass={'header'}
        staticTop
        inverse
        role='banner'>
        <Nav>
          <NavItemLink to='posts'>Posts</NavItemLink>
          <NavItemLink to='about-me'>About Me</NavItemLink>
        </Nav>
      </Navbar>
    );
  }
});

export default Navigation;
