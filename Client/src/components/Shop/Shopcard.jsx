import React from "react";
import "./shop.css";

export const Shopcard = ({ image, title, subtitle, desc, price }) => {
  // Function to truncate the description to 20 words
  const limitedDescFunc = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    } else {
      return description;
    }
  };
  const truncatedDesc = limitedDescFunc(desc, 20);

  return (
    <div className="ShopCard">
      <img src={image[0]} />
      <p style={{ marginTop: "50px", fontFamily: "monospace" }}>{title}</p>
      <p className="subtitle">{subtitle}</p>
      <p>{truncatedDesc}</p>
      <p>${price}</p>
    </div>
  );
};
