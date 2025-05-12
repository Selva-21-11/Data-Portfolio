import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: ["Python", "SQL", "JavaScript"],
  },
  {
    title: "Tools",
    items: ["Power BI", "Excel", "Git", "Tableau"],
  },
  {
    title: "Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn"],
  },
  {
    title: "Concepts",
    items: ["Data Cleaning", "EDA", "Machine Learning", "Data Storytelling"],
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.5
    }
  },
  hover: {
    y: -10,
    rotateZ: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150
    }
  },
  hover: {
    scale: 1.05,
    backgroundColor: "var(--primary-color)",
    color: "#fff",
    transition: {
      type: "spring",
      stiffness: 500
    }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2
              }
            }
          }}
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3
            }}
          >
            My Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            A versatile toolkit tailored for data-driven excellence.
          </motion.p>
        </motion.div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              className="skill-card"
              variants={cardVariants}
              whileHover="hover"
              viewport={{ once: true }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {cat.title}
              </motion.h3>
              <motion.ul>
                {cat.items.map((item, i) => (
                  <motion.li
                    key={item}
                    variants={itemVariants}
                    custom={i}
                    whileHover="hover"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;