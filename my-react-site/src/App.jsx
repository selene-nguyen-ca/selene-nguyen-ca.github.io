import "./App.css";
import "./pages/home/Home.css";

import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Navbar from "./navigator/NavBar.jsx";
import Resume from "./pages/resumes/Resume.jsx";
import ProjectsHome from "./pages/projects/ProjectHomePage.jsx";
import Project1 from "./pages/projects/SubProject/Project1.jsx";
import Project2 from "./pages/projects/SubProject/Project2.jsx";
import Project3 from "./pages/projects/SubProject/Project3.jsx";
import Contact from "./pages/contacts/Contact.jsx";

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/project-1" element={<Project1 />} />
            <Route path="/projects/project-2" element={<Project2 />} />
            <Route path="/projects/project-3" element={<Project3 />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;