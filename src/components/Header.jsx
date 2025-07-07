import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import { FaGithub, FaBehance, FaMedium, FaLinkedin } from 'react-icons/fa';
import logo from '../img/Logo.png';

const Header = () => {
  return (
    <header className="header-bar">
      <div className="header-bar-content">
        {/* LEFT SIDE - LOGO */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="header-logo-container">
            <img 
              src={logo}
              alt="Logo"
              className="header-logo"
            />
          </div>
        </Link>
        
        {/* RIGHT SIDE - ICONS */}
        {/* Add your icons here if needed */}
      </div>
    </header>
  );
};

export default Header;