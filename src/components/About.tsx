import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3>Who I Am</h3>

          <p>
            Passionate AI/ML Engineer and Full Stack Developer focused on
            building intelligent systems, scalable applications, and
            data-driven solutions that solve real-world problems.
          </p>

          <div className="about-tags">
            <span>AI/ML</span>
            <span>Full Stack</span>
            <span>Cybersecurity</span>
            <span>Cloud</span>
            <span>Data Science</span>
          </div>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="stat-card">
            <h1>4+</h1>
            <p>Projects Built</p>
          </div>

          <div className="stat-card">
            <h1>150+</h1>
            <p>DSA Problems</p>
          </div>

          <div className="stat-card">
            <h1>3+</h1>
            <p>Internships</p>
          </div>

          <div className="stat-card">
            <h1>2028</h1>
            <p>B.Tech Graduation</p>
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default About;