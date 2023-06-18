import React from "react";
import { SecondTop } from "./SecondTop";
import { Publications } from "./Publications";
import { NewsandEvents } from "./NewsandEvents";
import Navbar from "./Navbar";
import { SocialMedia } from "./pages/SocialMedia";

export const HomePage = () => {
  return (
    <div style={{ padding: "40px" }}>
      <SecondTop />
      <Publications />
      <NewsandEvents />
      <SocialMedia />
    </div>
  );
};
