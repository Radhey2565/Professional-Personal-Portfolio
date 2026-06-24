import "./Projects.css";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Accident Risk Prediction System",
    description:
      "Machine learning system that predicts road accident risk using weather, traffic, and road condition data.",
    tech: ["Python", "Scikit-Learn", "Pandas", "ML", "Streamlit"],
    github: "https://github.com/Radhey2565",
    demo:
      "https://radhey2565-accident-risk-prediction-appapp-rykbze.streamlit.app/",
  },

  {
    title: "IPL Score Prediction using Deep Learning",
    description:
      "Built a TensorFlow/Keras neural network to predict IPL scores using historical match data and player statistics",
    tech: ["Python", "TensorFlow", "Keras", "Machine Learning"],
    github: "https://github.com/Radhey2565",
  },

  {
  title: "Open Source Software Audit – Python",
  description:
    "Audited Python as an open-source software system using Linux Bash scripting, including system analysis, and automation.",
  tech: [
    "Python",
    "Linux",
    "Bash",
    "Shell Scripting",
    "Open Source",
    "System Administration"
  ],
  github: "https://github.com/Radhey2565",
  },

  {
    title: "SwasthyaJal AI",
    description:
      "AI-powered water quality monitoring and healthcare consultation platform.",
    tech: ["AI", "Python", "IoT", "APIs"],
    github: "https://github.com/Radhey2565",
  },

  {
    title: "Navisense",
    description:
      "Unified transportation platform integrating maps and ride-sharing APIs.",
    tech: ["React", "JavaScript", "API Integration"],
    github: "https://github.com/Radhey2565",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Reveal>
        <h2 className="section-title">Featured Projects</h2>
      </Reveal>

      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={i}>
            <div className="project-card">

              <div className="project-top">
                <span className="project-number">
                  0{i + 1}
                </span>
              </div>

              <h3>{p.title}</h3>

              <p>{p.description}</p>

              <div className="tech-stack">
                {p.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code →
                </a>

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo →
                  </a>
                )}
              </div>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;