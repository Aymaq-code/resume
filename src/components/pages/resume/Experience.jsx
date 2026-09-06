import { FaBriefcase, FaCode, FaPlane } from "react-icons/fa";
import { useAnimation } from "../../../context/ScrollAnimationProvider";

export default function Experience() {
  const { registerOnce } = useAnimation();

  const experienceData = [
    {
      icon: FaPlane,
      title: "Travel Consultant – Tolo Travel & Tours",
      description:
        "Working since 2015 with Emirates Airlines GSA in Afghanistan. Skilled in flight bookings (Amadeus, IATI), hotel reservations, and visa services. Experienced in handling corporate accounts, group bookings, and delivering excellent customer service with accuracy and professionalism.",
      color: "#3b82f6",
    },
    {
      icon: FaCode,
      title: "Frontend Developer (Self-Learning & Projects)",
      description:
        "Over 2 years of hands-on learning in frontend development. Completed CSS and JavaScript (Beginner to Advanced) courses on Udemy (instructors with 200K+ students). Currently 50% through a React.js course. Built multiple projects including a resume website, to-do app, weather app, and stationery store.",
      color: "#8b5cf6",
    },
  ];
  return (
    <div className="resumePage__section">
      <div className="resumePage__section-header" ref={registerOnce}>
        <div className="section-icon">
          <FaBriefcase />
        </div>
        <div className="section-title">
          <h2>Experience</h2>
          <span>Work History</span>
        </div>
      </div>

      <div className="resumePage__timeline">
        {experienceData.map((item, index) => (
          <div
            className="resumePage__timeline-item"
            key={index}
            ref={registerOnce}>
            <div className="timeline-dot" style={{ background: item.color }}>
              <item.icon />
            </div>
            <div className="timeline-content">
              <div className="timeline-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
