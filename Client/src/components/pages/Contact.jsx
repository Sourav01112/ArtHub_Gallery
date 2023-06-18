import React from "react";
import { ArrowForwardIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SocialMedia } from "./SocialMedia";

function Contact() {
  return (
    <div>
      <hr />
      <div className="contact" style={{ textAlign: "left" }}>
        <div style={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.700)" }}>
          <h1 id="con">New York</h1>
          <a href="">
            <ul>Marian Goodman Gallery</ul>
            <ul>24 West 57th Street</ul>
            <ul>New York, NY 10019</ul>
          </a>
          <a href="">
            <ul style={{ marginTop: "20px" }}>T 212-977-7160</ul>

            <ul>newyork@mariangoodman.com</ul>
            <ul style={{ marginTop: "20px" }}>
              <ArrowForwardIcon
                style={{ marginBottom: "3px", marginRight: "6px" }}
              />{" "}
              View map
            </ul>
          </a>
        </div>

        <div style={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.700)" }}>
          <h1 id="con">Paris</h1>
          <a href="">
            <ul>Galerie Marian Goodman</ul>
            <ul>79 & 66 rue du Temple</ul>
            <ul>75003 Paris</ul>
            <ul style={{ marginTop: "20px" }}>
              Tuesday - Saturday, 11 am - 7 pm
            </ul>
          </a>
          <a href="">
            <ul style={{ marginTop: "20px" }}>T +33 (0)1-48-04-70-52</ul>

            <ul>paris@mariangoodman.com</ul>
            <ul style={{ marginTop: "20px" }}>
              <ArrowForwardIcon
                style={{ marginBottom: "3px", marginRight: "6px" }}
              />{" "}
              View map
            </ul>
          </a>
        </div>

        <div style={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.700)" }}>
          <h1 id="con">Los Angeles</h1>
          <a href="">
            <ul>Marian Goodman Gallery</ul>
            <ul>Hollywood</ul>
            <ul>Los Angeles, CA 90038</ul>
          </a>
          <a href="">
            <ul style={{ marginTop: "20px" }}>losangeles@mariangoodman.com</ul>
            <ul style={{ marginTop: "20px" }}>
              <ArrowForwardIcon
                style={{ marginBottom: "3px", marginRight: "6px" }}
              />{" "}
              View map
            </ul>
          </a>
        </div>
      </div>
      <hr style={{ marginTop: "50px" }} />
      <h2
        style={{
          marginLeft: "50px",
          marginTop: "30px",
          fontSize: "25px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        Contact Us
      </h2>
      <div className="contact">
        <div style={{ fontSize: "13px" }}>
          <div>
            <p className="p">Sales Inquiries</p>
            <a href="">
              <p style={{ marginTop: "15px" }}>inquire@mariangoodman.com</p>
            </a>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p>Image and Reproduction Requests</p>
            <a href="">
              <p>catherine@mariangoodman.com</p>
            </a>
          </div>
        </div>
        <div style={{ fontSize: "13px" }}>
          {/* <ul>Press Requests</ul>
        <span >New York:</span>
        <a href=""><ul className='ola'>linda@mariangoodman.com</ul></a>
        <span >Paris:</span>
        <a href=""><ul className='Ola'>aphaele@mariangoodman.com</ul></a> */}

          <p className="p">Press Requests</p>
          <p>
            Email:{" "}
            <a href="mailto:linda@mariangoodman.com">linda@mariangoodman.com</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:raphaele@mariangoodman.com">
              raphaele@mariangoodman.com
            </a>
          </p>
        </div>
      </div>
      <hr style={{ marginTop: "30px" }} />

      <SocialMedia />
    </div>
  );
}

export default Contact;
