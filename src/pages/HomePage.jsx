import Navigation from "../layouts/Header";
import Footer from "../layouts/Footer";
import TechStack from "../components/pages/home/TechStack";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function HomePage() {
  useScrollAnimation();

  return (
    <main className="homePage">
      <Navigation />

      <section className="homePage__hero">
        <div className="container">
          <div className="homePage__content">
            {/* Left Side - Profile Image */}
            <div className="homePage__content--left animate-on-scroll">
              <div className="homePage__image-wrapper">
                <div className="homePage__image-glow"></div>
                <div className="homePage__image-container">
                  {/* Your profile image will be here via CSS background */}
                </div>
                <div className="homePage__floating-badge">
                  <span className="badge-dot"></span>
                  Available for work
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <TechStack />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
