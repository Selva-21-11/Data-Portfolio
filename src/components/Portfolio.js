import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Supply Chain Dashboard",
    description: "Tableau dashboard analyzing logistics data",
    detailedDescription: "Interactive dashboard showing key supply chain metrics and trends.",
    features: [
      "Real-time data visualization",
      "Interactive filters",
      "Performance metrics",
      "Geospatial analysis"
    ],
    tools: ["Tableau", "SQL", "Excel"],
    type: "dashboard",
    dashboardEmbed: `
      <div class='tableauPlaceholder' id='viz1747235370673' style='position: relative; width:100%; height:600px;'>
        <noscript>
          <a href='#'>
            <img alt='Dashboards ' src='https://public.tableau.com/static/images/KP/KPIAnalysis_17472077640650/Story1/1_rss.png' style='border: none' />
          </a>
        </noscript>
        <object class='tableauViz' style='display:none;'>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='site_root' value='' />
          <param name='name' value='KPIAnalysis_17472077640650/Story1' />
          <param name='tabs' value='no' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/KP/KPIAnalysis_17472077640650/Story1/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
      <script type='text/javascript'>
        var divElement = document.getElementById('viz1747235370673');
        var vizElement = divElement.getElementsByTagName('object')[0];
        vizElement.style.width='100%';
        vizElement.style.height='600px';
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
      </script>
    `,
    thumbnail: "https://via.placeholder.com/300x200?text=Tableau+Dashboard"
  },
  {
    title: "Web Application",
    description: "React application with Node.js backend",
    detailedDescription: "Full-stack application with user authentication and data visualization.",
    features: [
      "User authentication",
      "Real-time updates",
      "Responsive design",
      "API integration"
    ],
    tools: ["React", "Node.js", "MongoDB"],
    type: "regular",
    images: [
      "https://via.placeholder.com/600x400?text=App+Screenshot+1",
      "https://via.placeholder.com/600x400?text=App+Screenshot+2"
    ],
    video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    repoLink: "https://github.com/example/web-app",
    thumbnail: "https://via.placeholder.com/300x200?text=Web+App"
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
                        <motion.div 
                          className="dashboard-container" 
                          variants={detailItemVariants}
                          dangerouslySetInnerHTML={{ __html: project.dashboardEmbed }}
                        />
                      ) : (
                        <>
                          <motion.div className="media-grid" variants={detailItemVariants}>
                            {project.video && (
                              <div className="project-video">
                                <video controls className="project-media">
                                  <source src={project.video} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
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