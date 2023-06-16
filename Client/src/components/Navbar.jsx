import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg";
import { Search2Icon } from "@chakra-ui/icons";
import { Box, position } from "@chakra-ui/react";
import { FaArrowCircleUp } from "react-icons/fa";
import "../App.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  //****************  Scroll to Top   **************
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const threshold =
        document.documentElement.scrollHeight - window.innerHeight;

      if (window.pageYOffset < threshold / 2) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsTop(true);
  };
  //****************  Scroll to Top  ENDS **************

  return (
    <>
      <div
        className="navbarNew"
        style={{
          display: "flex",
          justifyContent: "space-between",
          // paddingBottom: "10px",
          alignItems: "center",
          marginBottom: "1px",
          padding: "30px",
        }}
        id="section-1"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="" style={{ width: "10%" }} />
          <p style={{ color: "red", fontSize: "16px", marginLeft: "10px" }}>
            MORDERN ART GALLERY
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            alignItems: "center",
          }}
        >
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }}>ARTISTS</Link>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }}>EXHIBITIONS</Link>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }}>NEWS</Link>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }} to={"/shop"}>
            SHOP
          </Link>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }} to={"/contact"}>
            CONTACT
          </Link>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)" }} to={"/about"}>
            ABOUT
          </Link>
          <Link style={{ color: "rgba(0, 0, 0, 0.547)", marginBottom: "5px" }}>
            <Search2Icon />
          </Link>
        </div>
      </div>

      {/* To top button :- CHAKRA */}

      <Box position="fixed" bottom="2rem" right="0.5rem">
        {isTop && (
          <FaArrowCircleUp color="red" size={30} onClick={scrollToTop} />
        )}
      </Box>
      {/* <hr /> */}
    </>
  );
}

export default NavBar;
