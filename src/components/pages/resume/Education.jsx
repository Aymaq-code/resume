import {
  FaAward,
  FaBuilding,
  FaCertificate,
  FaGraduationCap,
} from "react-icons/fa";
import { useAnimation } from "../../../context/ScrollAnimationProvider";

export default function Education() {
  const { registerOnce } = useAnimation();

  const educationData = [
    {
      icon: FaGraduationCap,
      title: "High School Diploma – Kabul, Afghanistan",
      color: "#f59e0b",
    },
    {
      icon: FaBuilding,
      title: "BBA – Business & Administration, Kardan University",
      color: "#3b82f6",
    },
    {
      icon: FaCertificate,
      title: "Diploma in English Language – Buniad-E-Elm Academic Center",
      color: "#ec4899",
    },
    {
      icon: FaAward,
      title: "Online Courses – Udemy (CSS, JavaScript, React.js)",
      color: "#8b5cf6",
    },
  ];

  return (
    <div className="resumePage__section education-section">
      <div className="resumePage__section-header" ref={registerOnce}>
        <div className="section-icon">
          <FaGraduationCap />
        </div>
        <div className="section-title">
          <h2>Education</h2>
          <span>Academic Background</span>
        </div>
      </div>

      <div className="resumePage__education-grid">
        {educationData.map((item, index) => (
          <div
            className="resumePage__education-card"
            key={index}
            ref={registerOnce}
            style={{ "--card-color": item.color }}>
            <div className="education-icon-wrapper">
              <item.icon className="education-icon" />
            </div>
            <div className="education-content">
              <h3>{item.title}</h3>
              <div className="education-line"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
