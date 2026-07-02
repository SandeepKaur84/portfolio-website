import { motion } from "framer-motion";
import { aboutBullets } from "../data/portfolioData";
import "../styles/About.css";

const Motion = motion;

const aboutCards = [
  {
    icon: "fa-layer-group",
    title: "Full Stack Thinking",
    description:
      "Designing features from interface to API so the product feels coherent end to end.",
  },
  {
    icon: "fa-mobile-screen-button",
    title: "Mobile First",
    description:
      "Building React Native experiences that feel fast, intentional, and native-friendly.",
  },
  {
    icon: "fa-database",
    title: "Real Data Flow",
    description:
      "Structuring MongoDB collections and APIs around actual application behavior.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-block about-section">
      <Motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-kicker">About Me</span>
        <h2>Aspiring software developer who likes practical, useful builds.</h2>
      </Motion.div>

      <div className="about-layout">
        <Motion.div
          className="about-copy glass-card"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            I am Sandeep Kaur, an aspiring software developer with a strong
            academic foundation in computer applications and programming. I like
            building real-world projects, learning new technologies, and solving
            complex problems with simple interfaces.
          </p>

          <ul className="about-bullets">
            {aboutBullets.map((bullet) => (
              <li key={bullet}>
                <i className="fas fa-check"></i>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <a className="inline-link" href="/Sandeep_Kaur_Resume.pdf" download>
            Download Resume <i className="fas fa-arrow-right"></i>
          </a>
        </Motion.div>

        <div className="about-cards">
          {aboutCards.map((card, index) => (
            <Motion.article
              key={card.title}
              className="about-card glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <i className={`fas ${card.icon}`}></i>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
