import React from "react";
import img1 from "../assets/img2.png";
import img2 from "../assets/img1.png";
import img3 from "../assets/img3.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "../App.css";

export const NewsandEvents = () => {
  return (
    <>
      <hr />
      <div style={{ marginBottom: "50px" }}>
        <p
          style={{ marginLeft: "10px", fontSize: "20px", marginBottom: "20px" }}
        >
          News and Events
        </p>
        <div className="newContainer">
          <div>
            <img src={img1} alt="" />
            <p
              style={{
                fontSize: "13px",
                color: "rgba(0, 0, 0, 0.547)",
                marginTop: "15px",
              }}
            >
              SOLO EXHIBITION
            </p>
            <hr />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              Nairy Baghramian - The Facade Commission: The Metropolitan Museum
              of Art
            </h2>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              Nairy Baghramian has been commissioned to create four new
              sculptures for The Met Fifth Avenue’s facade niches, marking the
              artist’s first public installation in New York City.
            </p>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              7 September 2023 - 19 May 2024
            </p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p
              style={{
                fontSize: "13px",
                color: "rgba(0, 0, 0, 0.547)",
                marginTop: "15px",
              }}
            >
              GROUP EXHIBITION
            </p>
            <hr />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              Cristina Iglesias - Dear Earth: Art and Hope in a Time of Crisis:
              Hayward Gallery
            </h2>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              The exhibition highlights the ways in which artists are helping to
              reframe and deepen our psychological and spiritual responses to
              the climate crisis, hoping to inspire joy and empathy as well
              as...
            </p>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              21 June - 3 September 2023
            </p>
          </div>
          <div>
            <img src={img3} alt="" />
            <p
              style={{
                fontSize: "13px",
                color: "rgba(0, 0, 0, 0.547)",
                marginTop: "15px",
              }}
            >
              PERFORMANCE
            </p>
            <hr />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              Tino Sehgal - This entry: Manchester International Festival
            </h2>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              In This entry, Sehgal brings together a group of highly skilled
              people from very different fields—a footballer, violinist, cyclist
              and a singer/dancer.
            </p>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              29 June - 16 July 2023
            </p>
          </div>
          <div>
            <img
              src="https://artlogic-res.cloudinary.com/w_800,h_800,c_limit,f_auto,fl_lossy,q_auto/ws-mariangoodman/usr/images/news/main_image/items/44/444f0ac9a2c141929913923dae81b9b4/iglesias_hayward-gallery.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "13px",
                color: "rgba(0, 0, 0, 0.547)",
                marginTop: "15px",
              }}
            >
              GROUP EXHIBITION
            </p>
            <hr />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              Cristina Iglesias - Dear Earth: Art and Hope in a Time of Crisis:
              Hayward Gallery
            </h2>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              The exhibition highlights the ways in which artists are helping to
              reframe and deepen our psychological and spiritual responses to
              the climate crisis, hoping to inspire joy and empathy as well
              as...
            </p>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              21 June - 3 September 2023
            </p>
          </div>
          <div>
            <img
              src="https://artlogic-res.cloudinary.com/w_800,h_800,c_limit,f_auto,fl_lossy,q_auto/ws-mariangoodman/usr/images/news/main_image/items/2e/2e800716959a445cb1ee8336bfb86fc9/messager_ludwig-museum.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "13px",
                color: "rgba(0, 0, 0, 0.547)",
                marginTop: "15px",
              }}
            >
              GROUP EXHIBITION
            </p>
            <hr />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              Annette Messager - The Cuteness Factor: Ludwig Museum
            </h2>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              The aim of the exhibition is to present and contextualize a
              current tendency in contemporary art, especially in painting.
            </p>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              23 June - 1 October 2023
            </p>
          </div>
          <div>
            <img
              src="https://artlogic-res.cloudinary.com/w_800,h_800,c_limit,f_auto,fl_lossy,q_auto/ws-mariangoodman/usr/images/news/main_image/items/1e/1eb20946fa4d4ea886cd7a8ffecc817a/antunes_fruitmarket.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "13px",
                color: "rgba(0, 0, 0, 0.547)",
                marginTop: "15px",
              }}
            >
              SOLO EXHIBITION
            </p>
            <hr />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              Leonor Antunes: Fruitmarket
            </h2>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              Leonor Antunes engages with traditions of modernist art,
              architecture and design through sculpture made and displayed with
              the specifics of a given place in mind.
            </p>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              24 June - 8 October 2023
            </p>
          </div>
          <div>
            <img
              src="https://artlogic-res.cloudinary.com/w_800,h_800,c_limit,f_auto,fl_lossy,q_auto/ws-mariangoodman/usr/images/news/main_image/items/e7/e7564c2422914e1f806770174b9016d2/struth_medizinhistorisches-museum-der-charite-.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "13px",
                color: "rgba(0, 0, 0, 0.547)",
                marginTop: "15px",
              }}
            >
              GROUP EXHIBITION
            </p>
            <hr />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              Thomas Struth - The Brain in Art and Science: Medizinhistorisches
              Museum der Charité
            </h2>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              Nairy Baghramian has been commissioned to create four new
              sculptures for The Met Fifth Avenue’s facade niches, marking the
              artist’s first public installation in New York City.
            </p>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              15 June 2023 - 28 January 2024
            </p>
          </div>
          <div>
            <img
              src="https://artlogic-res.cloudinary.com/w_800,h_800,c_limit,f_auto,fl_lossy,q_auto/ws-mariangoodman/usr/images/news/main_image/items/84/841599683a9b467e8abe0b459c8f741b/sibyl002.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "13px",
                color: "rgba(0, 0, 0, 0.547)",
                marginTop: "15px",
              }}
            >
              PERFORMANCE
            </p>
            <hr />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              William Kentridge - Sibyl: Wiener Festwochen
            </h2>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              A two-part musical evening which includes a 20-minute film and a
              chamber opera Waiting for the Sibyl which retells the prophecies
              of the priestess.
            </p>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              19 - 21 June 2023
            </p>
          </div>
          <div>
            <img
              src="https://artlogic-res.cloudinary.com/w_800,h_800,c_limit,f_auto,fl_lossy,q_auto/ws-mariangoodman/usr/images/news/main_image/items/b1/b1385573880d4b94a1c0d7fb642dd257/villar-rojas_helsinki-biennial_option-1.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "13px",
                color: "rgba(0, 0, 0, 0.547)",
                marginTop: "15px",
              }}
            >
              GROUP EXHIBITION
            </p>
            <hr />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
              Adrián Villar Rojas - The End of Imagination: Helsinki Biennial
              2023
            </h2>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              For Helsinki Biennial 2023, Adrián Villar Rojas has created a
              site-specific sculptural work in dialogue with the environment and
              inhabitants of Vallisaari Island.
            </p>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              12 June - 17 September 2023
            </p>
          </div>
        </div>
      </div>
      <button
        style={{
          border: "1px solid rgba(0, 0, 0, 0.547)",
          padding: "10px 20px",
          display: "block",
          margin: "auto",
          marginBottom: "50px",
          color: "rgba(0, 0, 0, 0.547)",
        }}
      >
        <ArrowForwardIcon style={{ marginBottom: "3px" }} /> View More
      </button>
    </>
  );
};
