import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import K from '../../Assets/Kavya.JPG';
import Type from './Type-Writer';
import './Home.css';

function Home() {
  return (
    <Container fluid className="home-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} className="text-center">
          <div className="image-wrapper">
            <img className="profile-image" src={K} alt='Kavya' />
          </div>
          <h1 className="greeting">Hi there! <span className="wave">👋🏻</span></h1>
          <h2 className="introduction">
            I am <span className="name">Kavya</span>
          </h2>
          <div className="typewriter-wrapper">
            <Type />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
