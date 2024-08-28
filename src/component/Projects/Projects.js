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
    <section className="project-section">
      <Container>
        <h1 className="project-heading">
          <span className="gradient-text">My Recent Works</span>
        </h1>
        <p className="project-subheading">
          Explore some of my latest projects and developments
        </p>
        <Row className="project-row">
          {[
            { img: Hexa, title: "HexaGenius Calculator", description: "A user-friendly Number System Calculator web application for effortless conversion between Decimal, Binary, Octal, and Hexadecimal.", github: "https://github.com/kavyaballa1020/HexaGenius-Calculator?tab=readme-ov-file", demo: "https://hexagenius-calculator.onrender.com/" },
            { img: Resume, title: "Resume Builder", description: "A React JS web application for creating and customizing two resume designs with real-time content updates.", github: "https://github.com/yourusername/new-project1", demo: "https://new-project1-demo-link.com" },
            { img: Markdown, title: "Markdown Editor", description: "A React-based Markdown editor with live preview for seamless editing and rendering of Markdown content.", github: "https://github.com/kavyaballa1020/Markdown-Editor-React.git", demo: "https://kav-markdown-editor.vercel.app/" },
            { img: SmartPond, title: "Smart Pond Monitoring System", description: "An IoT-based web application for remote monitoring of pond parameters, providing real-time data for effective management.", github: "https://github.com/kavyaballa1020/Fish-Pond-Monitoring-UI.git", demo: "https://fish-pond-monitoring-ui.vercel.app/" },
            { img: Gallery, title: "Image Gallery", description: "A responsive web component featuring automatic image sliding and navigation options, adaptable to various screen sizes.", github: "https://github.com/kavyaballa1020/CodeAlpha_ImageGallery.git", demo: "https://kav-image-gallery.vercel.app/" },
            { img: Blog, title: "Blog App", description: "A React-based blog platform enabling multiple users to manage their posts with create, edit, and delete functionalities.", github: "https://github.com/kavyaballa1020/Blog-App-Node.git", demo: "https://blog-app-node-76lm.onrender.com/" },
          ].map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="project-col">
              <ProjectCard
                imgPath={project.img}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.github}
                demoLink={project.demo}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;