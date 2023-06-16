import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Topfooter } from "./components/Topfooter";
import { SecondTop } from "./components/SecondTop";
import { Publications } from "./components/Publications";
import { NewsandEvents } from "./components/NewsandEvents";

function App() {
  return (
    <>
      <NavBar />
      <SecondTop/>
      <Publications/>
      <NewsandEvents/>
      <Topfooter/>
      <Footer/>
    </>
  );
}

export default App;
