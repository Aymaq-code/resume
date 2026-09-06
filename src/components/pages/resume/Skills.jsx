import { FaBriefcase, FaCode } from "react-icons/fa";
import { useAnimation } from "../../../context/ScrollAnimationProvider";

export default function Skills() {
  const { registerOnce } = useAnimation();

  const skillsData = [
    {
      category: "Travel Consulting",
      skills:
        "Airline Ticketing (Amadeus, IATI, GDS), Visa & Hotel Booking, Customer Service, Corporate Accounts Management, Sales & Upselling, Problem-Solving",
      icon: FaBriefcase,
      color: "#3b82f6",
    },
    {
      category: "Frontend Development",
      skills:
        "HTML5, CSS3, JavaScript (ES6+), React.js (in progress), Responsive Web Design, Git & GitHub, UI/UX Fundamentals",
      icon: FaCode,
      color: "#8b5cf6",
    },
  ];

  return (
    <div className="resumePage__section">
      <div className="resumePage__section-header" ref={registerOnce}>
        <div className="section-icon">
          <FaCode />
        </div>
        <div className="section-title">
          <h2>Skills</h2>
          <span>Professional & Technical</span>
        </div>
      </div>

      <div className="resumePage__skills-grid">
        {skillsData.map((item, index) => (
          <div
            className="resumePage__skill-card"
            key={index}
            ref={registerOnce}
            style={{ "--skill-color": item.color }}>
            <div className="skill-header">
              <item.icon className="skill-icon" />
              <h3>{item.category}</h3>
            </div>
            <p>{item.skills}</p>
            <div className="skill-gradient"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
