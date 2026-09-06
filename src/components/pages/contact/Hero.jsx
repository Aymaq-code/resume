import { FaPaperPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="contactPage__hero">
      <div className="container">
        <div className="contactPage__header">
          <span className="contactPage__badge">
            <FaPaperPlane /> Get in Touch
          </span>
          <h1 className="gradient-text-primary">Contact Me</h1>
          <div className="contactPage__subtitle">
            <span className="subtitle-line"></span>
            <p>Let's Work Together</p>
            <span className="subtitle-line"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
