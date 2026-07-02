import { motion } from "framer-motion";
import "../styles/Contact.css";

const Motion = motion;

const Contact = () => {
  return (
    <section id="contact" className="section-block contact-section">
      <Motion.div
        className="contact-card glass-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-heading contact-heading">
          <span className="section-kicker">Contact</span>
          <h2>Let&apos;s build something together.</h2>
          <p>
            Available for internships, junior roles, mobile apps, and practical
            full stack work.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:kaur190sandeep@gmail.com">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
            <strong>kaur190sandeep@gmail.com</strong>
          </a>
          <a
            href="https://www.linkedin.com/in/sandeep-kaur-5792b9233/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
            <strong>View profile</strong>
          </a>
          <a
            href="https://github.com/SandeepKaur84"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
            <strong>SandeepKaur84</strong>
          </a>
        </div>
      </Motion.div>
    </section>
  );
};

export default Contact;
