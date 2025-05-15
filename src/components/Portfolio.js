import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TableauViz from "./TableauViz"; // Adjust path as needed

const projects = [
    {
    title: "Supply chain Logisitcs - Dashboard",
    description: "A Power BI and Python-powered dashboard that analyzes, visualizes, and predicts freight cost and lead time trends from MySQL data.",
    detailedDescription: "This project is a Power BI dashboard integrated with Python to analyze and predict freight and supply chain metrics. It connects directly to a MySQL database, cleans and transforms data using Power Query, and calculates key metrics like freight cost, lead time, and delivery performance using DAX. Embedded Python scripts apply machine learning (e.g., Random Forest Regression) to forecast freight costs. The dashboard is divided into four pages: Freight Cost Overview, Lead Time Overview, Freight Predictive Analysis, and Predictive Python Visuals, each featuring interactive visuals and KPIs.",
    features: [
      "End-to-End Integration: Real-time connection to MySQL with data cleaning via Power Query and relationship modeling across freight, orders, and product tables.",
      "Insightful Metrics: Custom DAX measures for freight cost per KG, lead time, delivery rates, and warehouse utilization.",
      "Predictive Analytics: Python-based machine learning models predict freight costs with actual vs. predicted comparisons.",
      "Advanced Visuals: Embedded Python visuals show model performance alongside interactive Power BI charts and slicers."
    ],
    tools: ["PowerBi", "Python", "MySQL"],
    type: "regular",
    images: [
      "./assets/img1.jpg",
      "./assets/img2.jpg",
      "./assets/img3.jpg",
      "./assets/img4.jpg"
    ],
    video: "https://youtu.be/Uumxs2MW-1k",
    repoLink: "https://github.com/Selva-21-11/Supply_chain_logistics_project.git",
    thumbnail: "./assets/SCLD.webp"
  },
   {
    title: "Global AI Adoption & Impact - Dashboard",
    description: "Global AI Adoption & Impact Dashboard – Strategic Insights from 50+ Countries",
    detailedDescription: "An interactive Power BI dashboard that visualizes the global impact of AI on business performance, workforce dynamics, and public trust, helping stakeholders make data-driven decisions on AI investments and strategy.",
    features: [
      "Identifies leading and lagging regions in AI adoption, revenue impact, and public trust.",
      "Shows how AI implementation correlates with financial performance across regions.",
      "Analyzes the effect of AI collaboration on job displacement or retention.",
      "Evaluates how regulatory environments influence public trust and technology adoption."
    ],
    tools: ["PowerBi", "PowerQuery"],
    type: "regular",
    images: [
      "./assets/img11.png",
      "./assets/img12.png"
    ],
    video: "https://youtu.be/wEvTGedPwH8",
    repoLink: "https://github.com/Selva-21-11/Global-AI-Adoption-Impact-Dashboard.git",
    thumbnail: "./assets/GAD.webp"
  },
  {
    title: "Procurement KPI Analysis - Dashboard",
    description: "Tableau dashboard analyzing logistics data",
    detailedDescription: "Interactive dashboard showing key supply chain metrics and trends.",
    features: [
      "Real-time data visualization",
      "Interactive filters",
      "Performance metrics",
      "Geospatial analysis"
    ],
    tools: ["Tableau","Excel"],
    type: "dashboard",
    tableauEmbed: "KPIAnalysis_17472077640650/Story1", // Just the Tableau path!
    thumbnail: "./assets/PCKPI.webp"
  },
  {
    title: "TextQuest",
    description: "AI-powered app that answers textbook questions with precision, formatting, and PDF export using LangChain, FAISS, and Gemma3.",
    detailedDescription: "TextQuest is an AI-powered question answering system that helps students and educators generate accurate, well-formatted answers directly from textbook PDFs. By uploading a textbook and a question paper, the app uses NLP via LangChain and a Gemma3 LLM to extract, understand, and answer different types of questions (MCQs, short answers, essays). It leverages FAISS for vector search, PyMuPDF for PDF parsing, and FPDF2 for exporting structured answers in a printable format, all within an intuitive Streamlit interface.",
    features: [
      "Smart Parsing & Structuring: Auto-detects question types (MCQ, essay, etc.) and organizes them logically.",
      "Accurate Answering: Uses LLM + vector search to generate answers strictly from textbook content.",
      "Interactive & Customizable: Users can chat with the system and ask additional questions on textbook content.",
      "Formatted Output: Answers are exported as clean, printable PDFs with adaptive formatting based on question type."
    ],
    tools: ["Python", "Langchain", "Prompt Engineering", "LLM"],
    type: "regular",
    images: [
    ],
    video: "https://youtu.be/7wejf8bCyHk",
    repoLink: "https://github.com/Selva-21-11/TextQuest.git",
    thumbnail: "./assets/textquest.webp"
  }

];

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
                      {project.type === "dashboard" ? (
                        <motion.div className="dashboard-container" variants={detailItemVariants}>
                          <TableauViz 
                            embedUrl={project.tableauEmbed} 
                            height="100%"  // Adjust height to fit dropdown
                            width="100%"   // Full-width responsive
                          />
                        </motion.div>
                      ) : (
                        <>
                          <motion.div className="media-grid" variants={detailItemVariants}>
{project.video && (
  <div className="project-video">
    {(project.video.includes("youtube.com") || project.video.includes("youtu.be")) ? (
      <iframe
        className="project-media"
        width="100%"
        height="400"
        src={
          project.video.includes("youtu.be")
            ? `https://www.youtube.com/embed/${project.video.split("/").pop()}`
            : project.video.replace("watch?v=", "embed/")
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : (
      <video controls className="project-media">
        <source src={project.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </div>
)}
                            {project.images.map((img, i) => (
                              <img
                                key={i}
                                src={img}
                                alt={`${project.title} screenshot ${i + 1}`}
                                className="project-media"
                              />
                            ))}
                          </motion.div>
                          {project.repoLink && (
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
                          )}
                        </>
                      )}
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