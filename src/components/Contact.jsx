import React, { useState, useEffect, useCallback } from 'react';
import { FaUser, FaComment, FaTimes } from 'react-icons/fa';
import './Contact.css';
// Import your images (make sure these paths are correct)
import emailIcon from '../img/Email.png';
import phoneIcon from '../img/phone.png';
import linkedinIcon from '../img/Linkedin.png';

const Contact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleClose = useCallback((e) => {
    e?.stopPropagation();
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    handleClose();
  };

  return (
    <>
      <div 
        className="popup-overlay" 
        onClick={handleClose}
        data-testid="overlay"
      />
      
      <div 
        className="contact-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="close-btn" 
          onClick={handleClose}
          aria-label="Close"
          type="button"
        >
          &times; 
        </button>
        
        <div className="contact-info">
          <h3>Contact Me</h3>
          
          {/* Horizontal contact icons row */}
          <div className="contact-icons-row">
            <a href="mailto:githmidesilva22@gmail.com" className="icon-link">
              <img src={emailIcon} alt="Email" className="contact-icon-img" />
            </a>
            
            <a href="tel:+94704403113" className="icon-link">
              <img src={phoneIcon} alt="Phone" className="contact-icon-img" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/githmi-de-silva-802084222/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon-link"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="contact-icon-img" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              onChange={handleChange}
              rows="4"
            />
          </div>
          
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;