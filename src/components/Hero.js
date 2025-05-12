import React from "react";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="background-overlay"></div> {/* Background effect */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title fade-in">
            <SplitText text="Hi, I'm Selva" animation="fadeIn" delay={50} />
          </h1>
          <p className="hero-tagline fade-in" style={{ animationDelay: "0.3s" }}>
            Data Analyst | Insight-Driven Storyteller
          </p>
          <p className="hero-description fade-in" style={{ animationDelay: "0.6s" }}>
            Transforming complex data into actionable insights with <span className="highlight-text">Python</span>,{" "}
            <span className="highlight-text">Power BI</span>, and{" "}
            <span className="highlight-text">Data Storytelling</span> for business growth.
          </p>
        </div>

        <div className="cta-buttons">
          <a href="#portfolio" className="hero-btn primary">View Portfolio</a>
          <a href="#contact" className="hero-btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
