import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import JourneyStats from "./components/JourneyStats";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Clients from "./components/Clients";
import PreserveMemories from "./components/PreserveMemories";


function App() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="stats">
        <JourneyStats />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="services">
        <Services />
      </div>
      <div id="preserve">
        <PreserveMemories />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="clients">
        <Clients />
      </div>
      


    </>
  );
}

export default App;
