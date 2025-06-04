import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // <-- updated from Sidebar to Navbar
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Development from './pages/Development';
import Contact from './pages/contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tools" element={<Development />} />
          <Route path="contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
