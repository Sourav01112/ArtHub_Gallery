import React from "react";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import "./shop.css";
import data from "../../db.json";
import { Shopcard } from "./Shopcard";
import NavBar from "../Navbar";
import ShopBig from "../../assets/Shop_Big.jpg";

/*  Shop Page by Sourav */

export const Shop = () => {
  return (
    <div>
      <NavBar />
      {/* <div>
        <img src="https://cdn.shopify.com/s/files/1/2095/4219/files/mggs-dg-header.jpg?v=1679000632" />
        <p>Hello</p>
      </div> */}

      <div style={{ position: "relative", display: "inline-block" }}>
        <img src={ShopBig} alt="Image" style={{ maxWidth: "100%" }} />
        <div
          style={{
            position: "absolute",
            top: "75%",
            left: "35%",
            color: "white",

            transform: "translate(-50%, -50%)",
            // backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
          }}
        >
          <p style={{ fontSize: "35px" }}>Manga Dan Graham Story </p>
          <p>
            A special reprint published on the occasion of the Marian Goodman
            Gallery exhibition Dan Graham: Is There Life After Breakfast?,
            curated by Peter Fischli.
          </p>
        </div>
      </div>

      {/* Shop ART Card  */}
      <div className="ShopContainer">
        <h3>NEW</h3>
        <div className="CardContainer">
          {/* Include the Card component */}
          {data.Product?.map((ele) => {
            return <Shopcard {...ele} />;
          })}
        </div>
      </div>
    </div>
  );
};
