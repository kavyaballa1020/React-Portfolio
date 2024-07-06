import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { RiComputerFill } from "react-icons/ri";

import './Navbar.css';

function Navbar() {
  return (
    <div>
   
      <nav>
      <h3 className='navh3'> Balla Kavya</h3>
        <NavLink to="/">
          <IoHome /> Home
        </NavLink>

        <NavLink to="about">
          <FaUser /> About
        </NavLink>

        <NavLink to='skills'>
        <VscLightbulbSparkle />
         Skills
        </NavLink>

        <NavLink to='projects'>
        <RiComputerFill style={{marginTop:"2px"}} />
         Projects
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
