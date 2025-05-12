import React, { Suspense, lazy } from "react";
import "./styles/App.css";
import "./styles/Hero.css";
import "./styles/About.css";
import "./styles/Skills.css"
import "./styles/Portfolio.css"
import "./styles/Certifications.css"
import "./styles/Contact.css"

// Lazy-loaded sections
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="loading">Loading...</div>}>

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="portfolio">
          <Certifications />
        </section>

        <section id="contact">
          <Contact />
        </section>


      </Suspense>
    </div>
  );
}

export default App;
