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
    name: "Power BI Analyst",
    issuer: "Microsoft",
    date: "2024",
    logo: "./assets/microsoft_logo.png",
    link: "#"
  },
  {
    name: "SQL for Data Science",
    issuer: "IBM",
    date: "2023",
    logo: "./assets/ibm_logo.png",
    link: "#"
  },
  {
    name: "AWS Certified",
    issuer: "Amazon",
    date: "2023",
    logo: "./assets/aws_logo.png",
    link: "#"
  },
  {
    name: "Tableau Desktop",
    issuer: "Tableau",
    date: "2023",
    logo: "./assets/tableau_logo.png",
    link: "#"
  },
  {
    name: "Python for Data",
    issuer: "DataCamp",
    date: "2022",
    logo: "./assets/datacamp_logo.png",
    link: "#"
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
      stiffness: 400,
      damping: 10
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