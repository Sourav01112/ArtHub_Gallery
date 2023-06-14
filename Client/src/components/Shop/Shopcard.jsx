import React from "react";
import "./shop.css";

export const Shopcard = ({ title, image, price }) => {
  return (
    <div>
      <img src={image} />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};
