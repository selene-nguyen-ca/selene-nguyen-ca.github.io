import "./App.css";
import "./pages/home/Home.css";

import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Navbar from "./navigator/NavBar.jsx";
import Resume from "./pages/resumes/Resume.jsx";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;