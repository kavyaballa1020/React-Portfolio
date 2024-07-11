import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Card";
import Hexa from "../../Assets/Hexa.png";
import Simple from "../../Assets/Simple.png";
import './projects.css';
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong style={{ color: "violet" }}>  My Recent Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        <Row className="project-row">
          <Col md={6} className="project-col">
            <ProjectCard
              imgPath={Hexa}
              isBlog={false}
              title="HexaGenius Calculator"
              description="This is a user-friendly Number System Calculator web application. It allows you to effortlessly convert numbers between different number systems, including Decimal, Binary, Octal, and Hexadecimal."
              ghLink="https://github.com/kavyaballa1020/HexaGenius-Calculator?tab=readme-ov-file"
              demoLink="https://hexagenius-calculator.onrender.com/"
              
            />
          </Col>

          <Col md={6} className="project-col">
            <ProjectCard 
              imgPath={Simple}
              isBlog={false}
              title="Simple Calculator"
              description="This is a user-friendly Number System Calculator web application. It allows you to effortlessly convert numbers between different number systems, including Decimal, Binary, Octal, and Hexadecimal."
              ghLink="https://github.com/kavyaballa1020/Simple-Calculator-CUTM?tab=readme-ov-file"
              demoLink="https://simple-calculator-cutm.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
