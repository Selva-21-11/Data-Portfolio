import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2>Get In Touch</h2>
          <p>
            I'm open to freelance, full-time roles, or exciting collaborations. Let's create something impactful!
          </p>
        </motion.div>

        <motion.form
          className="contact-form"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <motion.div whileHover={{ scale: 1.02 }}>
            <input type="text" name="name" placeholder="Your Name" required />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <input type="email" name="email" placeholder="Your Email" required />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;