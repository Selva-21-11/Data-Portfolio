import React, { Suspense, lazy, useEffect, useState } from "react";
import "./styles/App.css";
import "./styles/Hero.css";
import "./styles/About.css";
import "./styles/Skills.css";
import "./styles/Portfolio.css";
import "./styles/Certifications.css";
import "./styles/Contact.css";

import FloatingButtons from "./components/FloatingButtons"; // Import the floating buttons component

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Apply theme to the root element and persist it
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

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

        <section id="certifications">
          <Certifications />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </Suspense>

      {/* Floating action buttons including theme toggle */}
      <FloatingButtons theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
