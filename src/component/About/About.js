import React from 'react'
import K_illustration from '../../Assets/K_illustration.svg'
function About() {
  return (
    <div className='about'>
    <img className="KI" src={K_illustration} alt="Kavya Illustration" />
      <p className='About'>
        Hi there! 👋🏻<br/>
        I'm <strong style={{color:"violet"}}>Balla Kavya</strong><br/>
        I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology.
        I am currently pursuing BTech in Computer Science Engineering at Centurion University.
        I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done.
        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience.
      </p>
    </div>
  )
}

export default About