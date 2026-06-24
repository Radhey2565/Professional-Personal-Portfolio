import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-bg"></div>

      <div className="hero-grid">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">
            AI/ML Engineer • Developer • Cybersecurity Enthusiast
          </span>

          <h1>
            Radhey Mohan Singh
          </h1>

          <h2>
            Building Intelligent Systems with
            <span> AI & Software Engineering</span>
          </h2>

          <p>
            Computer Science Engineer passionate about
            Artificial Intelligence, Machine Learning,
            Full Stack Development and Cloud Technologies.
            Creating scalable applications that solve
            real-world problems.
          </p>

          <div className="hero-buttons">

            <a href="/resume.pdf" 
               download= "Radhey_Mohan_Resume.pdf"
            >
              <button className="outline">
                Scroll Down to Know More 
              </button>
            </a>

          </div>


        </motion.div>

        <motion.div
          className="hero-sphere"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 360,
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            },
          }}
        >
          <div className="sphere"></div>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;