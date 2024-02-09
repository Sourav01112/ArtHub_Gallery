import "./App.css";
import NavBar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Topfooter } from "./components/Topfooter";
import { AllRoutes } from "./components/Routes/AllRoutes";

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
