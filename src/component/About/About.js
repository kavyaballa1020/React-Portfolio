import React from 'react'
import K_illustration from '../../Assets/K_illustration.svg'
import './About.css'
function About() {
  return (
    <div className='about'>
    <img className="KI" src={K_illustration} alt="Kavya Illustration" />
      <p className='About'>
        Hi there! 👋🏻<br/>
        I'm <strong style={{color:"violet"}}>Balla Kavya</strong><br/>
        I am a passionate Full-Stack Web Developer with experience in building scalable and user-friendly web applications using React.js, Angular, Spring Boot, and SAP ABAP. I have a strong foundation in Java, Python, data structures, and REST API design, and I enjoy solving complex problems while creating efficient and impactful software solutions.

I’ve worked on IoT systems, e-commerce platforms, and enterprise-level applications, and I value minimalistic design, responsive UI, and seamless user experience. I’m currently pursuing B.Tech in Computer Science Engineering at Centurion University, and I’m always excited to explore new technologies and contribute to meaningful projects.
      </p>
    </div>
  )
}

export default About