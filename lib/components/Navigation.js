var React = require('react');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var NavItemLink = require('react-router-bootstrap/lib/NavItemLink');

var Navigation = React.createClass({
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

module.exports = Navigation;
