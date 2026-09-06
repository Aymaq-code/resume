import SkillsBoard from "./SkillsBoard";

export default function TechStack() {
  return (
    <div className="homePage__content--right animate-on-scroll">
      <div className="aboutMe">
        <div className="aboutMe__greeting">
          <h1>Hello, I'm</h1>
        </div>
        <h2>Rashid Aymaq</h2>
        <div className="aboutMe__title">
          <span className="title-text">Frontend Developer</span>
          <span className="title-line"></span>
        </div>
        <p>
          Welcome to my online CV! I'm a passionate
          <strong> Frontend Web Developer</strong> specializing in building
          modern, responsive, and user-friendly websites using{" "}
          <strong>HTML, CSS, JavaScript, and React</strong>. I love creating
          clean designs with functional development to deliver unique digital
          experiences.
          <br />
          <br />
          <strong className="highlight-text">
            Together, we can turn your ideas into reality.
          </strong>
        </p>
      </div>
    </div>
  );
}
