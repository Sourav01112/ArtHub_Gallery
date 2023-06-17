import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Shop } from "../Shop/Shop";
import { Login } from "../Login";
import { Signup } from "../Signup";
import { SingleProductPage } from "../SingleProductPage";
import Admin from "../AdminLogin";
import { PageNotFound } from "../PageNotFound";
import { PrivateRoute } from "../pages/PrivateRoute";
import { ShopAllPage } from "../Shop/ShopAllPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route
        path="/collections/shop"
        element={
          <PrivateRoute>
            <ShopAllPage />
          </PrivateRoute>
        }
      />
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/admin_login" element={<Admin />}></Route>

      <Route path="/shop/:id" element={<SingleProductPage />}></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};
