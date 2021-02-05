import React from "react";

import {Container, Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark">
          <Container>
            {/* <Navbar.Brand>Brand here</Navbar.Brand> */}
            <Link className="navbar-brand" to="/">Brand Here</Link>
            <Nav className="ml-auto">
                <Link className="nav-link" to="/">Candidates</Link>
                <Link className="nav-link" to="/selected">Selected</Link>
                <Link className="nav-link" to="/rejected">Rejected</Link>
            </Nav>
          </Container>
      </Navbar>
    </header>
  );
};

export default Header;
