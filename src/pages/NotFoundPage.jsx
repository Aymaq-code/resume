import Navigation from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { FaHome, FaRocket, FaArrowLeft } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <main className="notFoundPage">
      <Navigation />

      <section className="notFoundPage__hero">
        <div className="container">
          <div className="notFoundPage__contents">
            <div className="notFoundPage__card">
              {/* Animated Background Elements */}
              <div className="notFoundPage__bg-elements">
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
                <div className="bg-circle bg-circle-3"></div>
                <div className="bg-circle bg-circle-4"></div>
              </div>

              {/* Floating Elements */}
              <div className="floating-element floating-1">
                <FaRocket />
              </div>
              <div className="floating-element floating-2">✨</div>
              <div className="floating-element floating-3">🚀</div>

              {/* Main Content */}
              <div className="notFoundPage__content">
                <div className="error-code">
                  <span className="digit digit-1">4</span>
                  <span className="digit digit-2">0</span>
                  <span className="digit digit-3">4</span>
                </div>

                <div className="error-message">
                  <h2>Oops! Lost in Space?</h2>
                  <p>
                    The page you're looking for has wandered off into the
                    digital cosmos. Don't worry, we can help you find your way
                    back home.
                  </p>
                </div>

                <div className="error-actions">
                  <Link to="/" className="btn btn-primary">
                    <FaHome /> Go Back Home
                  </Link>
                  <Link to="/contact" className="btn btn-secondary">
                    <FaArrowLeft /> Contact Support
                  </Link>
                </div>

                <div className="error-help">
                  <span className="help-text">Or try these quick links:</span>
                  <div className="quick-links">
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
