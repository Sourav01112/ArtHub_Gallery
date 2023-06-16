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

function App() {
  return (
    <>
      <NavBar />
      <AllRoutes/>
      {/* <SingleProductPage/> */}
      <Topfooter/>
      <Footer/>
    </>
  );
}

export default App;
