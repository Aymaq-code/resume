import { FaLanguage } from "react-icons/fa";
import { useAnimation } from "../../../context/ScrollAnimationProvider";

export default function Languages() {
  const { registerOnce } = useAnimation();
  const languages = [
    { name: "Dari / Persian", level: "Native", color: "#f59e0b" },
    { name: "Pashto", level: "Excellent", color: "#3b82f6" },
    { name: "English", level: "Excellent", color: "#8b5cf6" },
  ];

  return (
    <div className="resumePage__section languages-section">
      <div className="resumePage__section-header" ref={registerOnce}>
        <div className="section-icon">
          <FaLanguage />
        </div>
        <div className="section-title">
          <h2>Languages</h2>
          <span>Communication Skills</span>
        </div>
      </div>

      <div className="resumePage__languages">
        {languages.map((lang, index) => (
          <div
            className="resumePage__language-item"
            key={index}
            ref={registerOnce}>
            <div className="language-info">
              <span className="language-name">{lang.name}</span>
              <span className="language-level">{lang.level}</span>
            </div>
            <div className="language-bar">
              <div
                className="language-bar-fill"
                style={{
                  width: lang.level === "Native" ? "100%" : "90%",
                  background: `linear-gradient(90deg, ${lang.color}, ${lang.color}88)`,
                }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
