import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaJava, FaPython, FaCss3, FaHtml5 } from "react-icons/fa";
import { DiJavascript1, DiNodejsSmall, DiReact, DiTerminal, DiGit, DiGithubBadge, DiMongodb, DiMysql, DiPostgresql, DiVisualstudio, DiSass } from "react-icons/di";
import { SiBootstrap, SiPhp, SiFlask, SiSqlite, SiVercel, SiNetlify, SiRender, SiExpress, SiJquery, SiTypescript, SiSpringboot, SiGraphql, SiQiskit } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import "./Skills.css";
import { FaAngular, FaAws, FaC } from "react-icons/fa6";

const Skills = () => {
  return (
    <Container className="skills-container">
      <h2 className="skills-heading">Programming Languages</h2>
      <Row className="row PL">
        <Col className="col-skills">
          <FaC className="skill-icon c" />
        </Col>
        <Col className="col-skills">
          <CgCPlusPlus className="skill-icon cpp" />
        </Col>
        <Col className="col-skills">
          <FaJava className="skill-icon java" />
        </Col>
        <Col className="col-skills">
          <FaPython className="skill-icon python" />
        </Col>
      </Row>

      <h2 className="skills-heading">Web Technologies</h2>
      <Row className="row WT">
        <Row>
          <Col className="col-skills">
            <FaHtml5 className="skill-icon html" />
          </Col>
          <Col className="col-skills">
            <FaCss3 className="skill-icon css" />
          </Col>
          <Col className="col-skills">
            <DiJavascript1 className="skill-icon js" />
          </Col>
          <Col className="col-skills">
            <SiBootstrap className="skill-icon bootstrap" />
          </Col>
        </Row>
        <Row>
          <Col className="col-skills">
            <DiReact className="skill-icon react" />
          </Col>
          <Col className="col-skills">
            <FaAngular className="skill-icon angular" />
          </Col>
          <Col className="col-skills">
            <DiSass className="skill-icon sass" />
          </Col>
          <Col className="col-skills">
            <SiTypescript className="skill-icon typescript" />
          </Col>
        </Row>
        <Row>
          <Col className="col-skills">
            <SiJquery className="skill-icon jquery" />
          </Col>
          <Col className="col-skills">
            <SiFlask className="skill-icon flask" />
          </Col>
          <Col className="col-skills">
            <DiNodejsSmall className="skill-icon nodejs" />
          </Col>
          <Col className="col-skills">
            <SiExpress className="skill-icon express" />
          </Col>
        </Row>
        <Row>
          <Col className="col-skills">
            <SiPhp className="skill-icon php" />
          </Col>
          <Col className="col-skills">
            <SiSpringboot className="skill-icon springboot" />
          </Col>
          <Col className="col-skills">
            <SiGraphql className="skill-icon graphql" />
          </Col>
          <Col className="col-skills">
            <FaAws className="skill-icon aws" />
          </Col>
        </Row>
      </Row>

      <h2 className="skills-heading">Databases</h2>
      <Row className="row DB">
        <Col className="col-skills">
          <DiMysql className="skill-icon mysql" />
        </Col>
        <Col className="col-skills">
          <SiSqlite className="skill-icon sqlite" />
        </Col>
        <Col className="col-skills">
          <DiMongodb className="skill-icon mongodb" />
        </Col>
        <Col className="col-skills">
          <DiPostgresql className="skill-icon postgresql" />
        </Col>
      </Row>

      <h2 className="skills-heading">Tools and Platforms</h2>
      <Row className="row TP">
        <Row className="row">
          <Col className="col-skills">
            <DiGit className="skill-icon git" />
          </Col>
          <Col className="col-skills">
            <DiGithubBadge className="skill-icon github" />
          </Col>
          <Col className="col-skills">
            <DiTerminal className="skill-icon terminal" />
          </Col>
          <Col className="col-skills">
            <DiVisualstudio className="skill-icon vscode" />
          </Col>
        </Row>
        <Row>
        <Col className="col-skills">
          <SiQiskit className="skill-icon qiskit" />
        </Col>
          <Col className="col-skills">
            <SiVercel className="skill-icon vercel" />
          </Col>
          <Col className="col-skills">
            <SiNetlify className="skill-icon netlify" />
          </Col>
          <Col className="col-skills">
            <SiRender className="skill-icon render" />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Skills;
