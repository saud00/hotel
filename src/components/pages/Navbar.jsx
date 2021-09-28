import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navbar1() {
  const history = useHistory();

  return (
    <>
      <Navbar
        py="3"
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ position: "sticky", top: 0, zIndex: "1" }}
      >
        <Container>
          <Navbar.Brand className="typo font" href="/"><h2>Restaurent</h2> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-nav" />
          <Navbar.Collapse id="basic-nav">
            <Nav className="ms-auto">
              <NavLink
                activeStyle={{ color: "#c76f0a" }}
                className="nav-link"
                to="/menu"
              >
                Menu
              </NavLink>

              <NavLink
                activeStyle={{ color: "#c76f0a" }}
                className="nav-link"
                to="/events"
              >
                Events
              </NavLink>

              <NavLink
                activeStyle={{ color: "#c76f0a" }}
                className="nav-link"
                to="/contactus"
              >
                Contact Us
              </NavLink>

              <NavLink
                activeStyle={{ color: "#c76f0a" }}
                className="nav-link"
                to="/aboutus"
              >
                About Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
