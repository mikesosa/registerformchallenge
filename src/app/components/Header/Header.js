import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = props => {
  const handleClick = () => {
    props.showRegister(true);
  };

  return (
    <Navbar bg="dark" variant="primary">
      <Container>
        <Link to="/" className="navbar-brand">
          Brand
        </Link>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/pricing" className="nav-link">
            Pricing
          </Link>
        </Nav>
        <Button variant="outline-light" onClick={handleClick}>
          Register
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
