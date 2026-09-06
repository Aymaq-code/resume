import { useEffect, useState } from "react";
import SUC_SVG from "../assets/images/tick.svg";

export default function Success({ children }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="successMsg">
      <div className="successMsg__top">
        <img src={SUC_SVG} alt="success svg" />
      </div>
      <div className="successMsg__bottom">
        <p>{children}</p>
        <span className="progress"></span>
      </div>
    </div>
  );
}
