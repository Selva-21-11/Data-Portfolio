import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample project data (replace with your own)
const projects = [
  {
    title: "Supply chain Logistics Dashboard",
    description: "A Power BI dashboard analyzing Supply chain logistics",
    detailedDescription:
      "This project is a comprehensive dashboard created to analyze freight cost, lead time, and predict future freight trends using a combination of Power BI and Python (via embedded scripts). It is structured into four sheets:",
    features: [
      "Freight Cost Overview",
      "Lead Time Overview",
      "Freight Predictive Analysis",
      "Predictive Python Visuals"
    ],
    tools: ["Power BI", "DAX", "Excel", "SQL", "PowerQuery"],
    images: [
      "./assets/img4.jpg",
      "./assets/img3.jpg",
      "./assets/img1.jpg",
      "./assets/img2.jpg"
    ],
    video: "./assets/sales_demo.mp4",
    repoLink: "https://github.com/yourusername/sales-dashboard",
    thumbnail: "./assets/sales_thumb.webp"
  },
  {
    title: "Python Forecasting App",
    description:
      "Time-series forecasting model for sales prediction using ARIMA and Prophet, deployed via Streamlit.",
    detailedDescription: "Advanced forecasting application with the following capabilities:",
    features: [
      "Multiple model comparison (ARIMA, Prophet, LSTM)",
      "Custom confidence interval adjustment",
      "Historical accuracy visualization",
      "Exportable forecasts in multiple formats"
    ],
    tools: ["Python", "Prophet", "Streamlit"],
    images: ["./assets/forecast_app1.webp", "./assets/forecast_app2.webp"],
    video: "./assets/forecast_demo.mp4",
    repoLink: "https://github.com/yourusername/forecasting-app",
    thumbnail: "./assets/forecast_thumb.webp"
  }
];

// Card entry animation
const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Container + item animation for staggered detail content
const detailContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  },
  exit: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 }
  }
};

const detailItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { opacity: 0, y: 30, transition: { duration: 0.3 } }
};

const Portfolio = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2
          }}
        >
          <h2>Portfolio</h2>
          <p>Click on any project to view detailed information</p>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-wrapper"
              key={index}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className={`project-card ${expandedId === index ? "expanded" : ""}`}
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="project-thumbnail">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="thumbnail-image"
                  />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="short-description">{project.description}</p>
                  <ul className="project-tags">
                    {project.tools.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <AnimatePresence>
                {expandedId === index && (
                  <motion.div
                    className="project-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="details-content"
                      variants={detailContainerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div className="details-text" variants={detailItemVariants}>
                        <h4>Project Details</h4>
                        <p>{project.detailedDescription}</p>
                        <ul className="features-list">
                          {project.features.map((feature, i) => (
                            <li key={i}>
                              <span className="feature-bullet">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div className="media-grid" variants={detailItemVariants}>
                        <div className="project-images">
                          {project.images.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`${project.title} screenshot ${i + 1}`}
                              className="project-media"
                            />
                          ))}
                        </div>
                        {project.video && (
                          <div className="project-video">
                            <video controls className="project-media">
                              <source src={project.video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
                      </motion.div>

                      <motion.a
                        href={project.repoLink}
                        className="repo-button"
                        variants={detailItemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View GitHub Repository
                      </motion.a>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;