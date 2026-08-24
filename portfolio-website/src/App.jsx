import "./App.css";
import "./pages/home/Home.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Navbar from "./navigator/NavBar.jsx";
import Resume from "./pages/resumes/Resume.jsx";
import ProjectsHome from "./pages/projects/ProjectHomePage.jsx";
import ALSS from "./pages/projects/SubProject/ALSS.jsx";
import PulseCheck from "./pages/projects/SubProject/PulseCheck.jsx";
import WritingSample from "./pages/projects/SubProject/WritingSample.jsx";
import Contact from "./pages/contacts/Contact.jsx";
import BlogHome from "./pages/mundane-blog/BlogHome.jsx";
import BlogList from "./pages/mundane-blog/BlogList.jsx"

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
            <Route path="/mundane-blog" element={<BlogHome />} />
            <Route path="/mundane-blog/list" element={<BlogList/>} />
            <Route path="/projects/project-1" element={<ALSS />} />
            <Route path="/projects/project-2" element={<PulseCheck />} />
            <Route path="/projects/project-3" element={<WritingSample />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;