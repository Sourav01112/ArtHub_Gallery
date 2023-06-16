import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Topfooter } from "./components/Topfooter";
import { SecondTop } from "./components/SecondTop";
import { Publications } from "./components/Publications";
import { AllRoutes } from "./components/Routes/AllRoutes";

function App() {
  return (
    <>
      <AllRoutes />
      <NavBar />
      <SecondTop />
      <Publications />
      <Topfooter />
      <Footer />
    </>
  );
}

export default App;
