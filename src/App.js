import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Languages from "./components/Languages";
import Contact from "./components/Contact";

function App() {
  return (
    <div>

      <Navbar/>

      <Hero/>

      <About/>

      <Skills/>

      <Projects/>

      <Certifications/>

      <Achievements/>

      <Languages/>

      <Contact/>

    </div>
  );
}

export default App;