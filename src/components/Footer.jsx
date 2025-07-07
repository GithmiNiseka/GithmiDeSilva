import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin,
  faMedium,
  faGithub,
  faBehance
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="clean-footer">
      <div className="footer-container">
        <div className="footer-left">
          © 2025 Githmi De Silva. All rights reserved
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/githmi-de-silva-802084222/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faLinkedin} 
              className="footer-icon" 
              style={{ width: '18px', height: '18px' }}
            />
          </a>
          <a href="https://medium.com/@2020is026" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faMedium} 
              className="footer-icon" 
              style={{ width: '18px', height: '18px' }}
            />
          </a>
          <a href="https://github.com/GithmiNiseka" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faGithub} 
              className="footer-icon" 
              style={{ width: '18px', height: '18px' }}
            />
          </a>
          <a href="https://www.behance.net/githmidesilva" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faBehance} 
              className="footer-icon" 
              style={{ width: '18px', height: '18px' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;