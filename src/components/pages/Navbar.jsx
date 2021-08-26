import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Nav, NavLink, NavDropdown, Navbar } from "react-bootstrap";

export default function Navbar1() {
  const history = useHistory();
  return (
    <>
      <Navbar py="3" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/contactus">Resturent</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-nav" />
          <Navbar.Collapse id="basic-nav">
            <Nav className="ms-auto">
              <Nav.Link className="ms-auto">Menu</Nav.Link>
              <Nav.Link className="ms-auto">Contact Us</Nav.Link>
              <Nav.Link className="ms-auto">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
