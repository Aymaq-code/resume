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

export default function SkillsBoard() {
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
  );
}
