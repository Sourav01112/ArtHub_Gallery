import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Topfooter } from "./components/Topfooter";
import { SecondTop } from "./components/SecondTop";
import { Publications } from "./components/Publications";
import { NewsandEvents } from "./components/NewsandEvents";
import { AllRoutes } from "./components/Routes/AllRoutes";
import { SingleProductPage } from "./components/SingleProductPage";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { Signup } from "./components/Signup";

function App() {
  return (
    <>
      <NavBar />
      {/* <AllRoutes/> */}
      <Signup/>
      <Topfooter/>
      <Footer/>
    </>
  );
}

export default App;
