import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        className="project-card-img" // Apply border-radius and other styles from CSS
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-card-text"> {/* Apply text-align from CSS */}
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" className="btn-github">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="btn-demo"
          >
            <CgWebsite /> &nbsp;
            {"Live"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
