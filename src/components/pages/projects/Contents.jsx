import { FaCode, FaExternalLinkAlt, FaGithub, FaRocket } from "react-icons/fa";
import { useAnimation } from "../../../context/ScrollAnimationProvider";

export default function Contents({ projects }) {
  const { registerOnce } = useAnimation();

  return (
    <div className="projectsPage__contents">
      {projects.map((project, index) => (
        <div
          className={`projectsPage__project ${index % 2 === 0 ? "projectsPage__project--even" : "projectsPage__project--odd"}`}
          key={project.id}>
          <div className="projectsPage__project-wrapper">
            {/* Left Side - Content */}
            <div className="projectsPage__project-content" ref={registerOnce}>
              <div className="project-number">0{index + 1}</div>

              <div className="project-tags">
                <span className="tag featured">Featured Project</span>
              </div>

              <h2 className="project-title">{project.name}</h2>

              <div className="project-description">
                <p>{project.discription}</p>
              </div>

              <div className="project-tech">
                <h4>
                  <FaCode className="tech-icon" />
                  Technologies Used
                </h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary">
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="projectsPage__project-image" ref={registerOnce}>
              <div className="image-wrapper">
                <div className="image-glow"></div>
                <img src={project.image} alt={project.name} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <FaRocket className="overlay-icon" />
                    <span>View Project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
