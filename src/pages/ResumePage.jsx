import Education from "../components/pages/resume/Education";
import Experience from "../components/pages/resume/Experience";
import Languages from "../components/pages/resume/Languages";
import ResumeHero from "../components/pages/resume/ResumeHero";
import Skills from "../components/pages/resume/Skills";
import Footer from "../layouts/Footer";
import Navigation from "../layouts/Header";

export default function ResumePage() {
  return (
    <main className="resumePage">
      <Navigation />

      <ResumeHero />

      <div className="container">
        <div className="resumePage__contents">
          {/* Experience Section */}
          <Experience />

          {/* Education Section */}
          <Education />

          {/* Skills Section */}
          <Skills />

          {/* Languages Section */}
          <Languages />
        </div>
      </div>

      <Footer />
    </main>
  );
}
