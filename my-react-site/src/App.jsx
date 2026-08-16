import "./App.css";
import "./pages/home/Home.css";

import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Navbar from "./navigator/NavBar.jsx";
import Resume from "./pages/resumes/Resume.jsx";
import ProjectsHome from "./pages/projects/ProjectHomePage.jsx";
import Project1 from "./pages/projects/SubProject/Project1.jsx";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<ProjectsHome />} />
            <Route path="/projects/project-1" element={<Project1 />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;