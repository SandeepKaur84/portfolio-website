import React from "react";
import "../styles/Skills.css";

const skills = [
  { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
  { name: "React.js", icon: "fab fa-react", color: "#61DAFB" },
   { name: "React Native", icon: "fab fa-react", color: "#61DAFB" },
  { name: "Node.js", icon: "fab fa-node-js", color: "#68A063"   },
  { name: "Database", icon: "fas fa-database", color: "#f3742b" },
  { name: "GitHub", icon: "fab fa-github", color: "#fff" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Core Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <i className={`skill-icon ${skill.icon}`} style={{ color: skill.color }}></i>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
