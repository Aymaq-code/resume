import { FaCode } from "react-icons/fa";

export default function Logo({ onClick }) {
  return (
    <div
      className="logo"
      onClick={() => onClick("/")}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick("/")}>
      <div className="logo__icon">
        <FaCode />
      </div>
      <div className="logo__text">
        <h2>Rashid Aymaq</h2>
        <span>Frontend Developer</span>
      </div>
    </div>
  );
}
