import React from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.svg';

import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="header">
        <img className='header-logo' src={logo}></img>
      <nav className='header-content'>
        <ul>
          <li><a href="#about-us">ABOUT US</a></li>
          <li><a href="#classes">CLASSES</a></li>
          <li><a href="#demo-videos">DEMO VIDEOS</a></li>
          <li><a href="#demo-videos">CAREERS</a></li>

          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">LOGIN <FaArrowRightLong className='arrow'/>  </button>
        <button className="signup-btn">SIGNUP <FaArrowRightLong className='arrow' /></button>
      </div>
    </header>
  );
};

export default Navbar;
