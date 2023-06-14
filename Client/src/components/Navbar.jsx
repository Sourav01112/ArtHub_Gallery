import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      id="nav-menu"
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Nav.Item>
        <Nav.Link
          className="nav-link about"
          as={Link}
          to="/"
          onClick={() => updateExpanded(false)}
        >
          <img style={{ width: "100px" }} src={logo} />
        </Nav.Link>
      </Nav.Item>
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                className="nav-link home"
                as={Link}
                to="/artists"
                onClick={() => updateExpanded(false)}
              >
                ARTISTS
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-link about"
                as={Link}
                to="/exhibition"
                onClick={() => updateExpanded(false)}
              >
                EXHIBITIONS
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-link about"
                as={Link}
                to="/shop"
                onClick={() => updateExpanded(false)}
              >
                SHOP
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                className="nav-link projects"
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                CONTACT
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                className="nav-link projects"
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                ABOUT
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
