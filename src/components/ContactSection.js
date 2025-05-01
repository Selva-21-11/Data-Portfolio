import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic validation for empty fields
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    // If there are validation errors, set them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("Please fill out all required fields.");
      return;
    }

    setErrors({});
    setStatus("Sending...");

    try {
      const response = await fetch("https://threed-portfolio-backend.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus(data.success ? "Message sent successfully!" : "Failed to send message.");
      if (data.success) setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <motion.section
      className="contact-section"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className="contact-content" variants={itemVariants}>
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Have a project in mind? Want to collaborate? Just say hello!
          Fill in the form below and I’ll get back to you soon.
        </p>
        <motion.form className="contact-form" onSubmit={handleSubmit} noValidate variants={itemVariants}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Your Name"
            variants={itemVariants}
            className={`contact-input ${errors.name ? "input-error" : ""}`}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Your Email"
            variants={itemVariants}
            className={`contact-input ${errors.email ? "input-error" : ""}`}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Your Message"
            variants={itemVariants}
            className={`contact-textarea ${errors.message ? "input-error" : ""}`}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}

          <motion.button type="submit" className="contact-btn" variants={itemVariants}>
            Send Message
          </motion.button>
        </motion.form>
        {status && <motion.p className="contact-status" variants={itemVariants}>{status}</motion.p>}
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
