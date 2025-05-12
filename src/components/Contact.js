import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>
          I’m open to freelance, full-time roles, or exciting collaborations. Let’s create something impactful!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <p>
            <FaEnvelope className="icon" />
            <a href="mailto:selva@example.com">selva@example.com</a>
          </p>
          <p>
            <FaLinkedin className="icon" />
            <a href="https://linkedin.com/in/selva" target="_blank" rel="noreferrer">/in/selva</a>
          </p>
          <p>
            <FaGithub className="icon" />
            <a href="https://github.com/selva" target="_blank" rel="noreferrer">@selva</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
