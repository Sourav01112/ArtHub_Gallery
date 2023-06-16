import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Shop } from "../Shop/Shop";

export const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  );
};
