import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home.js';
import About from './component/About/About.js';
import Navbar from './component/Navbar/Navbar.js';
import Skills from './component/Skills/Skills';
import Project from './component/Projects/Projects.js';
import StarsCanvas from './component/StarCanvas.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    <div>
      <StarsCanvas />
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
