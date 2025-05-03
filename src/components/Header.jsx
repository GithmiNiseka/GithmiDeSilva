import React from 'react';
import { FaGithub, FaBehance, FaMedium,FaLinkedin } from 'react-icons/fa'; // Using react-icons library
import logo from '../img/Logo.png';
const Header = () => {
  return (
    <div className="header-bar">
      <div className="logo">
        <img 
                  src={logo}
                  alt="Scroll to top"
                  style={{
                    width: '200px',
                    height: '40px',
                    cursor: 'pointer',
                  
                  }}/>
        
        </div> {/* Replace with your logo */}
      
      <div className="social-icons">
        <a href="https://github.com/GithmiNiseka" target="_blank" rel="noopener noreferrer" className="icon-box">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.behance.net/githmidesilva" target="_blank" rel="noopener noreferrer" className="icon-box">
          <FaBehance className="icon" />
        </a>
        <a href="https://medium.com/@2020is026" target="_blank" rel="noopener noreferrer" className="icon-box">
          <FaMedium className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/githmi-de-silva-802084222/" target="_blank" rel="noopener noreferrer" className="icon-box">
    <FaLinkedin className="icon" />
  </a>
      </div>
    </div>
  );
};

export default Header;