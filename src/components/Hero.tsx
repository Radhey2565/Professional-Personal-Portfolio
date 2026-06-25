import "./Hero.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines: string[] = [
  "import numpy as np",
  "import pandas as pd",

  "data = pd.read_csv('dataset.csv')",
  "                                       ",
  "",
  "X = data.drop('price', axis=1)",
  "y = data['price']",
  "                                       ",
  "from sklearn.linear_model import LinearRegression",
  "model = LinearRegression()",
  "model.fit(X_train, y_train)",
  "print('AI Model Trained Successfully!')",
  
];

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  // typing effect
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLines(codeLines.slice(0, index));
      index++;

      if (index > codeLines.length) {
        clearInterval(interval);
      }
    }, 350);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">

      <div className="hero-bg"></div>

      <div className="hero-grid">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">
            AI/ML Engineer • Developer • Cybersecurity Enthusiast
          </span>

          <h1>Radhey Mohan Singh</h1>

          <h2>
            Building Intelligent Systems with
            <span> AI & Software Engineering</span>
          </h2>

          <p>
            Computer Science Engineer passionate about Artificial Intelligence,
            Machine Learning, Full Stack Development and Cloud Technologies.
            Creating scalable applications that solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download="Radhey_Mohan_Resume.pdf">
              <button className="outline">
                Scroll Down to Know More
              </button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - MONITOR + SPHERE */}
        <div className="hero-right">

          {/* CODE MONITOR */}
          <motion.div
            className="monitor"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="monitor-top-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>

            <div className="screen">
              <pre>
                {visibleLines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
                <span className="cursor">|</span>
              </pre>
            </div>
          </motion.div>

          {/* ROTATING SPHERE (your existing effect) */}
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
            <div className="AR"></div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
