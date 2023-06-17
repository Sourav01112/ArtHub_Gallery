import { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Topfooter } from "./components/Topfooter";
import { SecondTop } from "./components/SecondTop";
import { Publications } from "./components/Publications";
import { AllRoutes } from "./components/Routes/AllRoutes";
import { NewsandEvents } from "./components/NewsandEvents";
import { SingleProductPage } from "./components/Shop/SingleProductPage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { Signup } from "./components/pages/Signup";

function App() {
  return (
    <>
      <NavBar />
      <AllRoutes />
      <Topfooter />
      <Footer />
    </>
  );
}

export default App;
