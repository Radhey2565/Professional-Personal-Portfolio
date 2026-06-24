import "./Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">

      <div className="navbar-left">

        <div className="logo">
          RADHEY MOHAN SINGH
        </div>

        <div className="socials">
          <a
            href="https://github.com/Radhey2565"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/radhey-mohan-singh-4a3016266/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>

      <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("experience")}>Experience</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

    </nav>
  );
};

export default Navbar;