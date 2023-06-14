import React from "react";
import { Routes, Route } from "react-router-dom";
import { Shop } from "../Shop/Shop";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};
