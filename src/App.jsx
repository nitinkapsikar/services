import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Hero from "./component/Hero";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Home from "./component/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* SERVICES PAGE */}
        <Route path="/services" element={<Services />} />

        {/* PROJECTS PAGE */}
        <Route path="/projects" element={<Projects />} />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
