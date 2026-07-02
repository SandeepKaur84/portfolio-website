import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import "../styles/Projects.css";

const Motion = motion;

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ProjectCard = ({ project, index }) => (
  <Motion.article
    className="project-card glass-card"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.28 }}
    whileHover={{ y: -10, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 260, damping: 22 }}
  >
    <div className={`project-preview project-preview-${project.accent}`}>
      <div className="project-preview-frame">
        <div className="project-preview-topbar">
          <div className="project-window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="project-badge">{project.badge}</span>
        </div>
        <Motion.img
          src={project.image}
          alt={project.imageAlt}
          className={`project-image ${
            project.imageFit === "contain" ? "project-image--contain" : ""
          }`}
          loading="lazy"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.35 }}
        />
      </div>

      <div className="project-hover-panel">
        <div className="project-hover-glass">
          <div className="project-hover-head">
            <span className="project-hover-kicker">{project.badge}</span>
            <h4>{project.title}</h4>
          </div>
          <p>{project.description}</p>

          <div className="project-preview-thumbs">
            {project.previewShots.map((shot) => (
              <figure key={shot.alt} className="project-preview-thumb">
                <img src={shot.src} alt={shot.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="project-copy">
      <div className="project-copy-head">
        <span className="project-eyebrow">{project.badge}</span>
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>

      <ul className="project-highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>
            <span className="project-highlights-dot" aria-hidden="true" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="tech-stack" aria-label={`${project.title} technologies`}>
        {project.stack.map((stackItem) => (
          <span key={stackItem}>{stackItem}</span>
        ))}
      </div>

      <div className="project-actions">
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <i className="fab fa-github" />
          GitHub
        </a>
      </div>
    </div>
  </Motion.article>
);

const Projects = () => {
  return (
    <section id="projects" className="section-block projects-section">
      <Motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-kicker">Featured Projects</span>
        <h2>Selected work with real screenshots and live GitHub repos.</h2>
        <p className="section-subtitle">
          Each card below reflects the actual UI direction of the project, so
          the portfolio feels polished and honest at the same time.
        </p>
      </Motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
