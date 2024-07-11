import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { VscLightbulbSparkle } from 'react-icons/vsc';
import { RiComputerFill } from 'react-icons/ri';
import './Navbar.css'

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Balla Kavya</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact>
            <IoHome style={{ color: 'violet' }} /> Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            <FaUser style={{ color: 'violet' }} /> About
          </Nav.Link>

          <Nav.Link as={NavLink} to="/skills">
            <VscLightbulbSparkle style={{ color: 'violet' }} /> Skills
          </Nav.Link>

          <Nav.Link as={NavLink} to="/projects">
            <RiComputerFill style={{ color: 'violet', marginTop: '2px' }} /> Projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
