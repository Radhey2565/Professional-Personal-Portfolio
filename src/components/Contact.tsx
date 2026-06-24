import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        Interested in collaborating, hiring, or discussing a project?
      </p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=radheymohan614@gmail.com&su=Portfolio%20Inquiry"
        target="_blank"
        rel="noopener noreferrer"
        className="email-link"
      >
        <FaEnvelope />
        <span>radheymohan614@gmail.com</span>
      </a>

      <p className="contact-footer">
        Feel free to reach out anytime. I usually respond within 24 hours.
      </p>
    </section>
  );
};

export default Contact;