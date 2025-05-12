import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "  Supply chain Logistics Dashboard",
    description: "A Power BI dashboard analyzing Supply chain logistcs",
    detailedDescription: "This project is a comprehensive dashboard created to analyze freight cost, lead time, and predict future freight trends using a combination of Power BI and Python (via embedded scripts). It is structured into four sheets:",
    features: [
      "Freight Cost Overview",
      "Lead Time Overview",
      "Freight Predictive Analysis",
      "Predictive Python Visuals"
    ],
    tools: ["Power BI", "DAX", "Excel","SQL","PowerQuery"],
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
    description: "Time-series forecasting model for sales prediction using ARIMA and Prophet, deployed via Streamlit.",
    detailedDescription: "Advanced forecasting application with the following capabilities:",
    features: [
      "Multiple model comparison (ARIMA, Prophet, LSTM)",
      "Custom confidence interval adjustment",
      "Historical accuracy visualization",
      "Exportable forecasts in multiple formats"
    ],
    tools: ["Python", "Prophet", "Streamlit"],
    images: [
      "./assets/forecast_app1.webp",
      "./assets/forecast_app2.webp"
    ],
    video: "./assets/forecast_demo.mp4",
    repoLink: "https://github.com/yourusername/forecasting-app",
    thumbnail: "./assets/forecast_thumb.webp"
  }
];

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
            <div className="project-wrapper" key={index}>
              <motion.div
                className={`project-card ${expandedId === index ? "expanded" : ""}`}
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * index }}
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
                    <div className="details-content">
                      <div className="details-text">
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
                      </div>
                      
                      <div className="media-grid">
                        <div className="project-images">
                          {project.images.map((img, i) => (
                            <img 
                              key={i} 
                              src={img} 
                              alt={`${project.title} screenshot ${i+1}`}
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
                      </div>
                      
                      <motion.a
                        href={project.repoLink}
                        className="repo-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View GitHub Repository
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;