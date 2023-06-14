import React from "react";
import { Routes, Route } from "react-router-dom";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};
