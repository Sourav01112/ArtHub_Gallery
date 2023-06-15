import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {Search2Icon} from "@chakra-ui/icons"
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
    <div style={{display:"flex",justifyContent:"space-between",padding:"40px",alignItems:"center",marginBottom:"30px"}}>
      <div>
        <p style={{fontSize:"16x",color:"red",fontWeight:"500",display:"flex",alignItems:"center",justifyContent:"center"}}>MORDERN ART GALLERY</p>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",width:"50%",alignItems:"center"}}>
        <Link>ARTISTS</Link>
        <Link>EXHIBITIONS</Link>
        <Link>VIEWING ROOMS</Link>
        <Link>FAIRS</Link>
        <Link>NEWS</Link>
        <Link>SHOP</Link>
        <Link>EDUCATION</Link>
        <Link>CONTACT</Link>
        <Link>ABOUT</Link>
        <Link><Search2Icon/></Link>
      </div>
    </div>
    
  );
}

export default NavBar;


{/* <Navbar
      id="nav-menu"
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
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
    </Navbar> */}