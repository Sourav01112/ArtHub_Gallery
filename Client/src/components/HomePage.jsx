import React from "react";
import { SecondTop } from "./SecondTop";
import { Publications } from "./Publications";
import { NewsandEvents } from "./NewsandEvents";
import Navbar from "./Navbar";

export const HomePage = () => {
  return (
    <div>
      <SecondTop />
      <Publications />
      <NewsandEvents />
    </div>
  );
};
