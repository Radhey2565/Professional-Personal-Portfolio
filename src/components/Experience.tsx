import "./Experience.css";
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "Cognifyz Technologies",
    role: "Software Engineer Intern",
    duration: "May 2026 – Jun 2026 | Remote",
    description:
      "Contributed to software development, application testing, and code reviews. Collaborated cross-functionally to debug issues and optimize performance.",
  },
  {
    company: "Cognifyz Technologies",
    role: "C++ Developer Intern",
    duration: "Aug 2025 – Sep 2025 | Remote",
    description:
      "Designed and optimized performance-critical C++ modules using OOP and STL. Improved runtime efficiency of core data structures and worked in a Git-based agile workflow.",
  },
  {
    company: "The Red Users",
    role: "Cybersecurity Intern",
    duration: "Feb 2025 – Mar 2025 | Remote",
    description:
      "Analyzed network protocols, traffic patterns, and attack vectors using Wireshark, Nmap, and Metasploit. Identified vulnerabilities and documented monitoring workflows.",
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      <div className="timeline">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <span>{item.duration}</span>

              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;