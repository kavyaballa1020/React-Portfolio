import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Home from './component/Home.js';
import About from './component/About.js';
import Navbar from './component/Navbar.js';
import Skills from './component/Skills.js';
import Project from './component/Project.js';
import Pre from './component/Pre.js';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Pre load={loading} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
