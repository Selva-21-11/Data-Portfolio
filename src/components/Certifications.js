import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "Google Data Analytics",
    issuer: "Coursera",
    date: "2024",
    logo: "./assets/google_logo.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/QFRLZSGEGNB8"
  },
  {
    name: "SQL - Beginner",
    issuer: "Hackerrank",
    date: "2025",
    logo: "./assets/hackerrank_logo.png",
    link: "#"
  },
  {
    name: "SQL - Intermediate",
    issuer: "Hackerrank",
    date: "2025",
    logo: "./assets/hackerrank_logo.png",
    link: "#"
  },
  {
    name: "Python-Essentials",
    issuer: "Scaler",
    date: "2025",
    logo: "./assets/scaler-Logo.png",
    link: "#"
  },
  {
    name: "SAP S4/HANA",
    issuer: "Udemy",
    date: "2023",
    logo: "./assets/Udemy_logo.png",
    link: "#"
  },
  {
    name: "PowerBi",
    issuer: "Office Master",
    date: "2022",
    logo: "./assets/OM_logo.jpg",
    link: "#"
  }
];

// Card entry animation with sliding, blurring, and rotating effects
const cardVariants = {
  hidden: { opacity: 0, x: -100, blur: 10, rotate: -5 },
  visible: {
    opacity: 1,
    x: 0,
    blur: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      duration: 0.6,
    }
  },
  hover: {
    scale: 1.1,
    rotate: 3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

// Staggering animation for a smoother entry
const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger the appearance of cards
      when: "beforeChildren", // Animate the children first
    }
  }
};

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <motion.div
        className="certifications-container"
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
      >
        <motion.div className="certifications-header" variants={cardVariants}>
          <h2>Certifications</h2>
          <p>Industry-recognized credentials validating my expertise</p>
        </motion.div>

        <motion.div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              className="cert-card"
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover="hover"
              transition={{ delay: 0.1 * (index % 3) }}
            >
              <div className="cert-logo-container">
                <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <a href={cert.link} className="cert-link">
                  View
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
