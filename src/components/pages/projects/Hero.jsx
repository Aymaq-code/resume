import { FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="projectsPage__hero">
      <div className="container">
        <div className="projectsPage__header">
          <span className="projectsPage__badge">
            <FaCode /> Portfolio
          </span>
          <h1 className="gradient-text-primary">My Projects</h1>
          <div className="projectsPage__subtitle">
            <span className="subtitle-line"></span>
            <p>Transforming Ideas into Digital Experiences</p>
            <span className="subtitle-line"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
