import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiSupabase,
  SiReactquery,
  SiPostman,
  SiJavascript,
} from "react-icons/si";

export default function TechStack() {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "React Query", icon: SiReactquery, color: "#FF4154" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "API", icon: FaCode, color: "#FF6C37" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Database", icon: FaDatabase, color: "#4479A1" },
  ];

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

      {/* Skills Section */}
      <div className="skills">
        <div className="skills__header">
          <h3>Tech Stack</h3>
          <span className="skills__count">{skills.length}+ Skills</span>
        </div>
        <div className="skills__grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skills__item"
              style={{ "--skill-color": skill.color }}>
              <skill.icon className="skills__icon" />
              <span className="skills__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
