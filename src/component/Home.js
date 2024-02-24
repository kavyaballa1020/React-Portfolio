import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import K from '../Assets/Kavya.JPG'
import Type from './Type-Writer';
import Particle from './Particle';



function Home() {
  return (
    <section>
    <Particle />
    <Container className='home-container'>
        <Row>
        <Col md={7} >
            <img className="K" src={K}/>
            </Col>
            <Col  md={5} className='ColHome-Header'>
                <h1  className='heading'>
                <p>Hi there!  👋🏻</p>
                  I am <strong style={{color:"violet"}}>Kavya</strong></h1>
               
                <Type className='type'></Type>
            </Col>

        </Row>
    </Container>
 
    
    
      <footer> 

        <p className="contact">Contact me:</p>

        <a href="https://www.linkedin.com/in/ballakavya/" target="_blank">
        <button className="linkedin">
            <svg width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2M1 19V6h4v13zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7z"/>
            </svg>
        </button></a>


        <a href="http://www.facebook.com/minnukota381" target="_blank">
        <button className="facebook">
            <svg width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2"/>
            </svg>
        </button></a>


        <a href="https://github.com/kavyaballa1020" target="_blank">
            <button className="github">
            <svg width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15c0-4 1-7 3-9c0 0-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9c2 2 3 5 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0"/>
            </svg>
            </button></a>


        <a href="http://www.twitter.com/minnukota381" target="_blank">
            <button className="x">
            <svg width="30px" height="30px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"/>
            </svg>
            </button></a>
        </footer>


    </section>
  )
  
}

export default Home