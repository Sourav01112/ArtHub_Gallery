import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg"
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
    <>
    <div style={{display:"flex",justifyContent:"space-between",paddingBottom:"10px",alignItems:"center",marginBottom:"1px"}} id='section-1'>
      <div style={{display:"flex",alignItems:"center"}}>
        <img src={logo} alt="" style={{width:"10%"}}/>
        <p style={{color:"red",fontSize:"16px",marginLeft:"10px"}}>MORDERN ART GALLERY</p>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",width:"80%",alignItems:"center"}}>
        <Link style={{color:"rgba(0, 0, 0, 0.547)"}}>ARTISTS</Link>
        <Link style={{color:"rgba(0, 0, 0, 0.547)"}}>EXHIBITIONS</Link>
        <Link style={{color:"rgba(0, 0, 0, 0.547)"}}>VIEWING ROOMS</Link>
        <Link style={{color:"rgba(0, 0, 0, 0.547)"}}>FAIRS</Link>
        <Link style={{color:"rgba(0, 0, 0, 0.547)"}}>NEWS</Link>
        <Link style={{color:"rgba(0, 0, 0, 0.547)"}}>SHOP</Link>
        <Link style={{color:"rgba(0, 0, 0, 0.547)"}}>EDUCATION</Link>
        <Link style={{color:"rgba(0, 0, 0, 0.547)"}}>CONTACT</Link>
        <Link style={{color:"rgba(0, 0, 0, 0.547)"}}>ABOUT</Link>
        <Link style={{color:"rgba(0, 0, 0, 0.547)",marginBottom:"5px"}}><Search2Icon/></Link>
      </div>
      
    </div>
    <hr />
    </>
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