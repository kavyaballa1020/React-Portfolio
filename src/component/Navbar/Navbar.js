import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineBulb, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

function Navbar() {
  return (
    <div>
   
      <nav>
      <h3 className='navh3'> Balla Kavya</h3>
        <NavLink to="/">
          <AiOutlineHome /> Home
        </NavLink>

        <NavLink to="about">
          <AiOutlineUser /> About
        </NavLink>

        <NavLink to='skills'>
        <AiOutlineBulb />
         Skills
        </NavLink>

        <NavLink to='projects'>
        <AiOutlineFundProjectionScreen style={{marginTop:"2px"}} />
         Projects
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
