import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import K from '../Assets/Kavya.JPG'
import Type from './Type-Writer';

function Home() {
  return (
    <section>
    <Container className='home-container'>
        <Row>
        <Col md={7} >
            <img className="K" src={K} alt='Kavya'/>
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

        <a href="https://www.linkedin.com/in/kavyaballa/" target="_blank" rel="noreferrer">
        <button className="linkedin">
            <svg width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2M1 19V6h4v13zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7z"/>
            </svg>
        </button></a>

        <a href="http://www.instagram.com/kavyaballa1020" target="_blank" rel="noreferrer">
            <button class="instagram">
                <svg
                    viewBox="0 0 16 16"
                    class="bi bi-instagram"
                    fill="currentColor"
                    height="30px"
                    width="30px"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334">
                    </path>
                </svg>
            </button>
        </a>

        <a href="http://www.facebook.com/kavyaballa1020" target="_blank" rel="noreferrer">
        <button className="facebook">
            
            <svg width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2"/>
            </svg>
        </button></a>


        <a href="https://github.com/kavyaballa1020" target="_blank" rel="noreferrer">
            <button className="github">
            <svg width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15c0-4 1-7 3-9c0 0-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9c2 2 3 5 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0"/>
            </svg>
            </button></a>


        <a href="http://www.twitter.com/kavyaballa1020" target="_blank" rel="noreferrer">
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
