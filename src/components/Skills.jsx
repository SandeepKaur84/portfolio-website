import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolioData";
import "../styles/Skills.css";

const Motion = motion;

const Skills = () => {
  return (
    <section id="skills" className="section-block skills-section">
      <Motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-kicker">Skills</span>
        <h2>Stack depth that supports real products.</h2>
      </Motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <Motion.article
            key={group.title}
            className="skills-card glass-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
          >
            <div className="skills-card-header">
              <h3>{group.title}</h3>
              <p>{group.subtitle}</p>
            </div>

            <div className="skill-list">
              {group.items.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-row-label">
                    <span>{skill.name}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <div className="skill-bar">
                    <Motion.span
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
