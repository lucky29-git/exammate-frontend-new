import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='logo'>
        <img src='/img/logo (1).png' alt="Logo" />
      </div>

      <div className='links'>
        <ul>
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to='/subject-notes' className={({ isActive }) => isActive ? 'active' : ''}>Subject Wise Notes</NavLink></li>
          <li><NavLink to='/pyqs' className={({ isActive }) => isActive ? 'active' : ''}>PYQs</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
        </ul>
      </div>

      <div className='loginSignup'>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </section>
  );
};
