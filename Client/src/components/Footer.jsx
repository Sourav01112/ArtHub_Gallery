import { EmailIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bottomFooter">
      <div >
        <p className="logoRed" >
          MORDERN ART GALLERY
        </p>
      </div>
      <div
      className="footerflex"
        
      >
        <p>TERMS & CONDITIONS</p>
        <p>PRIVACY POLICY</p>
        <p>ACCESSIBILITY POLICY</p>
        <Link to={"/admin_login"}>
          <Button size="sm" colorScheme="yellow" borderRadius={'-10px'} >
            Admin
          </Button>
        </Link>
      </div>
      <div
        style={{
          width: "30%",
          textAlign: "right",
          fontSize: "10px",
          color: "rgba(0, 0, 0, 0.547)",
        }}
      >
        <p>© 2023 MARIAN GOODMAN</p>
      </div>
    </div>
  );
};
