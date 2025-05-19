import React from "react";
import { motion } from "framer-motion";

const certifications = [
  // Add more certifications to fill the grid if needed
  {
    name: "Google Data Analytics",
    issuer: "Coursera",
    date: "2024",
    logo: "./assets/google_logo.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/QFRLZSGEGNB8"
  },
  {
    name: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    date: "2025",
    logo: "./assets/Forage_logo.png",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_kPYHn8vNPJ3KfQuSb_1747199684798_completion_certificate.pdf"
  },
  {
    name: "SQL - Basics",
    issuer: "Hackerrank",
    date: "2025",
    logo: "./assets/hackerrank_logo.png",
    link: "https://www.hackerrank.com/certificates/af24781a2e00"
  },
  {
    name: "SQL - Intermediate",
    issuer: "Hackerrank",
    date: "2025",
    logo: "./assets/hackerrank_logo.png",
    link: "https://www.hackerrank.com/certificates/019068141915"
  },
  {
    name: "Python-Essentials",
    issuer: "Scaler",
    date: "2025",
    logo: "./assets/scaler-Logo.png",
    link: "https://moonshot.scaler.com/s/li/Y9QoOEjSf7"
  },
  {
    name: "SAP S4/HANA",
    issuer: "Udemy",
    date: "2023",
    logo: "./assets/Udemy_logo.png",
    link: "https://www.udemy.com/certificate/UC-166d7c88-6ebc-4c96-9891-c21f8dc3c5de/"
  },
    {
    name: "SAP Cloud Analytics",
    issuer: "Udemy",
    date: "2023",
    logo: "./assets/Udemy_logo.png",
    link: "https://www.udemy.com/certificate/UC-9c674429-a544-4e76-8c1a-87033246dc3c/"
  },
  {
    name: "PowerBi",
    issuer: "Office Master",
    date: "2022",
    logo: "./assets/OM_logo.jpg",
    link: "https://certx.in/certificate/36a28147-6eed-47a5-8342-e5f926ebba61341279"
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 5
    }
  }
};

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <motion.div className="certifications-header">
          <h2>Certifications</h2>
          <p>Industry-recognized credentials validating my expertise</p>
        </motion.div>

        <div className="certifications-grid">
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
        </div>
      </div>
    </section>
  );
};

export default Certifications;