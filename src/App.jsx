// App.js
import { HashRouter, Route, Routes } from "react-router-dom";
import { ScrollAnimationProvider } from "./context/ScrollAnimationProvider";
import { ResumeProvider } from "./context/ResumeContext";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <ResumeProvider>
      <ScrollAnimationProvider>
        <HashRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </ScrollAnimationProvider>
    </ResumeProvider>
  );
}

export default App;
