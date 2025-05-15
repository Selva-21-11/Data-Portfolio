import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import "../styles/FloatingButtons.css";

function FloatingButtons({ theme, toggleTheme }) {
  return (
    <div className="fab-group">

      <a href="mailto:your@email.com" className="fab" aria-label="Email">
        <FaEnvelope />
      </a>

      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="fab" aria-label="GitHub">
        <FaGithub />
      </a>

      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="fab" aria-label="LinkedIn">
        <FaLinkedin />
      </a>

      <button onClick={toggleTheme} className="fab" aria-label="Toggle Theme">
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>

    </div>
  );
}

export default FloatingButtons;
