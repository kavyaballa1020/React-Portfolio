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
          <strong>My Recent Works</strong>
        </h1>
        <p>
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
              imgPath={Resume}
              isBlog={false}
              title="Resume Builder"
              description="This React JS-powered web application allows users to create and customize two distinct resume designs. With a dynamic interface, content entered on the left side instantly updates on the right, providing a real-time preview. It offers an intuitive and efficient way to craft polished, professional resumes."
              ghLink="https://github.com/yourusername/new-project1"
              demoLink="https://new-project1-demo-link.com"
            />
          </Col>
          <Col md={6} className="project-col">
            <ProjectCard
              imgPath={Markdown}
              isBlog={false}
              title="New Project 2"
              description="Description for New Project 2."
              ghLink="https://github.com/yourusername/new-project2"
              demoLink="https://new-project2-demo-link.com"
            />
          </Col>
          <Col md={6} className="project-col">
            <ProjectCard
              imgPath={SmartPond}
              isBlog={false}
              title="New Project 3"
              description="Description for New Project 3."
              ghLink="https://github.com/yourusername/new-project3"
              demoLink="https://new-project3-demo-link.com"
            />
          </Col>
          <Col md={6} className="project-col">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="New Project 4"
              description="Description for New Project 4."
              ghLink="https://github.com/yourusername/new-project4"
              demoLink="https://new-project4-demo-link.com"
            />
          </Col>
          <Col md={6} className="project-col">
            <ProjectCard
              imgPath={Gallery}
              isBlog={false}
              title="New Project 5"
              description="Description for New Project 5."
              ghLink="https://github.com/yourusername/new-project5"
              demoLink="https://new-project5-demo-link.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
