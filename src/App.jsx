import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { ScrollAnimationProvider } from "./context/ScrollAnimationProvider";
import { ResumeProvider } from "./context/ResumeContext";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const isProduction = process.env.NODE_ENV === "production";
  const Router = isProduction ? HashRouter : BrowserRouter;
  const basename = isProduction ? "/" : "/my-resume";

  return (
    <ResumeProvider>
      <ScrollAnimationProvider>
        <Router basename={basename}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ScrollAnimationProvider>
    </ResumeProvider>
  );
}

export default App;
