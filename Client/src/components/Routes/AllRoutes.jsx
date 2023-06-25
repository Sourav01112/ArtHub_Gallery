import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Shop } from "../Shop/Shop";
import { Signup } from "../pages/Signup";
import { SingleProductPage } from "../Shop/SingleProductPage";
import { PageNotFound } from "../PageNotFound";
import { PrivateRoute } from "../pages/PrivateRoute";
import { ShopAllPage } from "../Shop/ShopAllPage";
// import Admin from "../AdminLogin";
import { Login } from "../../components/pages/Login";
import CartPage from "../Shop/CartPage";
import { Admin } from "../Admin/Admin";
import { AddProduct } from "../Admin/AddProduct";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/collections/shop" element={<ShopAllPage />} />
      <Route
        path="/shop/:_id"
        element={
          <PrivateRoute>
            <SingleProductPage />
          </PrivateRoute>
        }
      ></Route>

      {/*  failed to apply Private Route on CartPage component which is on page <SingleProductPage/>, so as of now apply PrivateRoute to only <SingleProductPage />*/}
      <Route
        path="/get/cart"
        // path="/shop/:_id"
        element={
          // <PrivateRoute>
          <CartPage />
          // </PrivateRoute>
        }
      />

      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/admin/" element={<Admin />}></Route>
      <Route path="/admin/add-product" element={<AddProduct />}></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};
