import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Card";
import Hexa from "../../Assets/Hexa.png";
import Resume from "../../Assets/Resume.png";
import Markdown from "../../Assets/Markdown.png";
import SmartPond from "../../Assets/SmartPond.png";
import Blog from "../../Assets/Blog.png";
import Gallery from "../../Assets/Gallery.png";
import './projects.css';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <span className="gradient-text-1">My Recent</span> <span className="gradient-text-2">Works</span>
        </h1>

        <Row className="project-row">
          <Col xs={12} sm={6} md={4} className="project-col">
            <ProjectCard
              imgPath={Hexa}
              isBlog={false}
              title={<h2 className="project-card-title">HexaGenius <span className="gradient-text-3">Calculator</span></h2>}
              description="This is a user-friendly Number System Calculator web application. It allows you to effortlessly convert numbers between different number systems, including Decimal, Binary, Octal, and Hexadecimal."
              ghLink="https://github.com/kavyaballa1020/HexaGenius-Calculator?tab=readme-ov-file"
              demoLink="https://hexagenius-calculator.onrender.com/"
            />
          </Col>
          {/* Rest of the code remains the same */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;