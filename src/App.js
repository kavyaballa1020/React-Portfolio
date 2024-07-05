import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Home from './component/Home/Home.js';
import About from './component/About/About.js';
import Navbar from './component/Navbar/Navbar.js';
import Skills from './component/Skills/Skills';
import Project from './component/Projects/Projects.js';
import Pre from './component/Preloader/Pre.js';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 
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
