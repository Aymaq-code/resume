import Footer from "../layouts/Footer";
import Navigation from "../layouts/Header";
import Loader from "../messages/Loader";
import ErrorMsg from "../messages/ErrorMsg";
import { useResume } from "../context/ResumeContext";
import Hero from "../components/pages/projects/Hero";
import Contents from "../components/pages/projects/Contents";

export default function ProjectsPage() {
  const { loading, error, projects } = useResume();
  if (loading) return <Loader />;
  if (error)
    return (
      <ErrorMsg>
        Something went wrong. Please refresh or try again later.
      </ErrorMsg>
    );

  return (
    <main className="projectsPage">
      <Navigation />

      <Hero />

      <div className="container">
        <Contents projects={projects} />
      </div>

      <Footer />
    </main>
  );
}
