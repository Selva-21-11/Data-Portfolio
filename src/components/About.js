import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

  return (
    <section id="about" className="about-section" ref={ref}>
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="about-text" variants={titleVariants}>
          <motion.h2
            variants={titleVariants}
            style={{
              background: "linear-gradient(to right, var(--primary-color), var(--accent-color))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </motion.h2>

          <motion.p custom={1} variants={textVariants}>
            I’m Selva, a passionate data analyst specializing in transforming complex data into actionable insights. With a background in Mechanical Engineering, I use data storytelling, analytics, and predictive modeling to help businesses grow smarter and more efficiently.
          </motion.p>

          <motion.div className="skills" custom={2} variants={textVariants}>
            <h3>Key Skills</h3>
            <motion.ul
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {["Data Storytelling", "Predictive Analytics", "Python & Power BI"].map((skill, index) => (
                <motion.li key={skill} custom={index + 3} variants={textVariants}>
                  <span className="highlight-text">{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-image"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <img src="./assets/About_pic.webp" alt="Selva" />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;
