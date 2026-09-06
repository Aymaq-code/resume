import { Link } from "react-router-dom";
import ERROR_SVG from "../assets/images/error.svg";

export default function ErrorMsg({ children }) {
  return (
    <main className="errorMsg">
      <div className="errorMsg__top">
        <img src={ERROR_SVG} alt="error svg" />
      </div>
      <div className="errorMsg__bottom">
        <p>{children}</p>
      </div>
      <Link to="/">Back To Home</Link>
    </main>
  );
}
