import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import { AllRoutes } from "./components/Routes/AllRoutes";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <NavBar />
   
    {/* <About/> */}
    <Contact/>
     

    </>
  );
}

export default App;
