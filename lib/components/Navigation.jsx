var React = require('react');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var NavItemLink = require('react-router-bootstrap/lib/NavItemLink');

var Navigation = React.createClass({
  render: function() {
    return (
      <Navbar
        componentClass={'header'}
        staticTop
        inverse
        role='banner'>
        <Nav>
          <NavItemLink to='posts'>Posts</NavItemLink>
          <NavItemLink to='other'>Other</NavItemLink>
          <NavItemLink to='blog-post'>Blog Post</NavItemLink>
          <NavItemLink to='blog-post2'>Blog Post2</NavItemLink>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Navigation;
