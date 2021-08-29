import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Nav, NavLink, NavDropdown, Navbar } from "react-bootstrap";

export default function Navbar1() {
  const history = useHistory();
  return (
    <>
      <Navbar py="3" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Restaurent</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-nav" />
          <Navbar.Collapse id="basic-nav">
            <Nav className="ms-auto">
              <Nav.Link className="ms-auto" href="menu">
                Menu
              </Nav.Link>
              <Nav.Link className="ms-auto" href="contactus">
                Contact Us
              </Nav.Link>
              <Nav.Link className="ms-auto" href="aboutus">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
