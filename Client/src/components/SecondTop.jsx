import React, { useEffect, useState } from "react";
import img from "../assets/Artlogo.png";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import i5 from "../assets/i5.png";
import i6 from "../assets/i6.png";
import "../App.css";

export const SecondTop = () => {
  // const [count, Setcount] = useState(0)
  const imgArr = [i1, i2, i3, i4, i5, i6];
  const [img1, setImg] = useState(i1);

  return (
    <div className="secondTopContainer">
      <div className="bigTile">
        <img src={img1} alt="" style={{ width: "47%" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              Art Basel
            </h2>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Hall 2.0/Booth B20 <br />
              13 - 18 June 2023
            </h2>
            <p style={{ color: "rgba(0, 0, 0, 0.547)" }}>
              Our 2023 edition of Art Basel includes a wide selection of
              paintings, sculptures, works on paper, and more by artists from
              our program,
            </p>
            <button className="buttonInTile">View Selected Works</button>
          </div>
        </div>
      </div>
      <div className="bigTile">
        <img src={img} alt="" style={{ width: "47%" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              Art Basel | Your Guide to Exhibitions in Europe
            </h2>
            <p style={{ color: "rgba(0, 0, 0, 0.547)" }}>
              Current and upcoming exhibitions, performances, and related events
              happening across Europe ahead of Art Basel.
            </p>
            <button className="buttonInTile">VIEW LIST</button>
          </div>
        </div>
      </div>
    </div>
  );
};
