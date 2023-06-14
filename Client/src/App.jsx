import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import { AllRoutes } from "./components/Routes/AllRoutes";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <AllRoutes />
    </>
  );
}

export default App;
