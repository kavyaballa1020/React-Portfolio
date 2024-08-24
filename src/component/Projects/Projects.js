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
          <strong><span className="gradient-text">My Recent Works</span></strong>
        </h1>

        <Row className="project-row">
          <Col xs={12} sm={6} md={4} className="project-col">
            <ProjectCard
              imgPath={Hexa}
              isBlog={false}
              title="HexaGenius Calculator"
              description="This is a user-friendly Number System Calculator web application. It allows you to effortlessly convert numbers between different number systems, including Decimal, Binary, Octal, and Hexadecimal."
              ghLink="https://github.com/kavyaballa1020/HexaGenius-Calculator?tab=readme-ov-file"
              demoLink="https://hexagenius-calculator.onrender.com/"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="project-col">
            <ProjectCard
              imgPath={Resume}
              isBlog={false}
              title="Resume Builder"
              description="This React JS web application lets users create and customize two resume designs. The dynamic interface updates content in real-time, offering a polished and professional resume crafting experience."
              ghLink="https://github.com/yourusername/new-project1"
              demoLink="https://new-project1-demo-link.com"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="project-col">
            <ProjectCard
              imgPath={Markdown}
              isBlog={false}
              title="Markdown Editor"
              description="A React-based Markdown editor that allows users to write Markdown code on the left side and instantly see the rendered output on the right side. This interactive tool provides a seamless experience for editing and previewing Markdown content."
              ghLink="https://github.com/yourusername/new-project2"
              demoLink="https://kav-markdown-editor.vercel.app/"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="project-col">
            <ProjectCard
              imgPath={SmartPond}
              isBlog={false}
              title="Smart Pond Monitoring System"
              description="The Smart Pond Monitoring System is an IoT-based web application that allows users to remotely monitor various pond parameters such as pH levels, water temperature, and water levels. It provides real-time data and insights for effective pond management and maintenance."
              ghLink="https://github.com/yourusername/new-project3"
              demoLink="https://new-project3-demo-link.com"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="project-col">
            <ProjectCard
              imgPath={Gallery}
              isBlog={false}
              title="Image Gallery"
              description="Description for New Project 4."
              ghLink="https://github.com/yourusername/new-project4"
              demoLink="https://blog-app-node-76lm.onrender.com/blog"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="project-col">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Blog App"
              description="The blog app, built with React, enables multiple users to log in, create, edit, and delete their posts. It provides a dynamic platform for user-generated content management with an intuitive interface."
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