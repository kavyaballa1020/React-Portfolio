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
      
    </section>
  )
  
}

export default Home
