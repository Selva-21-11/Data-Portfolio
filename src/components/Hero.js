import React from "react";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content upgraded-hero-content">
        <h1 className="first-line fade-in">
          <SplitText text="DISCOVER" animation="fadeIn" delay={50} />
        </h1>

        <h2 className="second-line fade-in" style={{ animationDelay: "0.3s" }}>
          <SplitText text="THIRD DIMENSION!" animation="fadeIn" delay={50} />
        </h2>

        <p className="hero-subtext fade-in" style={{ animationDelay: "0.6s" }}>
          Elevating digital experiences with{" "}
          <span className="highlight-text">3D & Creativity</span>
        </p>

        <nav className="cta-buttons fade-in" style={{ animationDelay: "1s" }}>
          <a href="#portfolio" className="hero-btn primary" aria-label="View Portfolio">
            View Work
          </a>
          <a href="#contact" className="hero-btn secondary" aria-label="Contact Me">
            Contact Me
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
