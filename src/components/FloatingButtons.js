import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import "../styles/FloatingButtons.css";

function FloatingButtons({ theme, toggleTheme }) {
  return (
    <div className="fab-group">

      <a href="mailto:selva.ranjan40@gmail.com" className="fab" aria-label="Email">
        <FaEnvelope />
      </a>

      <a href="https://github.com/Selva-21-11" target="_blank" rel="noopener noreferrer" className="fab" aria-label="GitHub">
        <FaGithub />
      </a>

      <a href="https://www.linkedin.com/in/selva-ranjan-03a5ab239/" target="_blank" rel="noopener noreferrer" className="fab" aria-label="LinkedIn">
        <FaLinkedin />
      </a>

      <button onClick={toggleTheme} className="fab" aria-label="Toggle Theme">
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>

    </div>
  );
}

export default FloatingButtons;
