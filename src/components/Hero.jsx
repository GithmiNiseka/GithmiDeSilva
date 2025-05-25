import React, { useState } from 'react';
import ContactPopup from './Contact'; 
import FarmoidRobotech from '../img/farmoid.png';
import Signify from '../img/signify.png';
import BusTravel from '../img/BusTravel.png';
import SmartWatch from '../img/smartwatch.png';
import MealMap from '../img/MealMap.png';
import NewProject from '../img/dalada.png'; 
import horizontalArrow from '../img/horizontalArrow.png';
import ProfileImg from '../img/profileImg.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [expanded, setExpanded] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <div className="profile-header">
          <div className="profile-image-container">
            <img 
              src={ProfileImg}
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <button className="contact-button" onClick={() => setShowContact(true)}>Contact Me</button>
        </div>
        {showContact && (
          <ContactPopup onClose={() => setShowContact(false)} />
        )}
        
        <h1 className="profile-name">Githmi De Silva</h1>
        <p className="profile-title">UI/UX Engineer</p>
        
        <div className="skills-container">
          <span className="skill-box">Figma</span>
          <span className="skill-box">HTML</span>
          <span className="skill-box">CSS</span>
          <span className="skill-box">React</span>
        </div>
        
        <div className="divider-line"></div>
        <div className="know-me-toggle" onClick={toggleExpand}>
          <span>WANT the TEA on WHO I AM?</span>
          <span className={`toggle-icon ${expanded ? 'expanded' : ''}`}>{'>'}</span>
        </div>
      </div>
      
      {expanded && (
        <div className="about-me-box">
          <h2>So, Who's This Human Behind the Pixels?</h2>
          <p>
            <span style={{
              color: '#515151',
              fontWeight: '450',
              textUnderlineOffset: '4px',
              fontSize:'18px',
            }}>I'm a UI/UX Engineer from the colorful chaos of Colombo, Sri Lanka</span>, where tuk-tuks beep, designs get tweaked at 2 AM, and inspiration hits somewhere between kottu bites and coffee sips.
          </p>
          <p>
            I craft clean, clever, and crazy-useful web & mobile apps — the kind Gen Z scrolls through at lightning speed, and even your uncle who still types with one finger can figure out.
            <span style={{
              color: '#141414',
              fontWeight: '450',
              textUnderlineOffset: '4px',
              fontSize:'16px',
              fontStyle: 'italic',
            }}>"I believe design should be so intuitive that users don't have to ask, 'Wait... where do I click?'"</span>
          </p>
          <p>
            I learned the ropes at the <span style={{
              color: '#515151',
              fontWeight: '450',
              textUnderlineOffset: '4px',
              fontSize:'18px',
            }}>University of Colombo School of Computing</span> sharpened my UX ninja skills at <span style={{
              color: '#515151',
              fontWeight: '450',
              textUnderlineOffset: '4px',
              fontSize:'18px',
            }}>WSO2</span>, and even helped farmers go digital with <span style={{
              color: '#515151',
              fontWeight: '450',
              textUnderlineOffset: '4px',
              fontSize:'18px',
            }}>Farmoid Robotech</span>, where I turned soil data into smart decisions using devices that literally live in the mud and beam up info via QR codes.
            <span style={{
              color: '#141414',
              fontWeight: '450',
              textUnderlineOffset: '4px',
              fontSize:'16px',
              fontStyle: 'italic',
            }}>— Dirt + tech = delightful.</span>
          </p>
        </div>
      )}

      <div className="work-section">
        <div className="section-title">
          <div className="title-line"></div>
          <h2>SOME OF MY LAST WORK</h2>
          <div className="title-line"></div>
        </div>
        
        <div className="work-items">
             {/* NEW Project - Added Here */}
          <div className="work-item">
            <Link to="/dalada-case-study" className="work-item-link">
              <div className="work-item-image-container">
                <img 
                  src={NewProject}
                  alt="New Project"
                  className="work-item-image"
                />
              </div>
              <div className="work-item-content">
                <h3 className="work-item-title">Sacred Queue Management </h3>
                <div className="work-item-description">
                  <p>DaladaLine</p>
                </div>
              </div>
              <div className="work-item-arrow-container">
                <img 
                  src={horizontalArrow} 
                  alt="View project" 
                  className="work-item-arrow" 
                />
              </div>
            </Link>
          </div>

            {/* Signify Project */}
            <div className="work-item">
            <Link to="/signify-case-study" className="work-item-link">
              <div className="work-item-image-container">
                <img 
                  src={Signify}
                  alt="Signify Project"
                  className="work-item-image"
                />
              </div>
              <div className="work-item-content">
                <h3 className="work-item-title">App for Deaf Community</h3>
                <div className="work-item-description">
                  <p>Signify</p>
                </div>
              </div>
              <div className="work-item-arrow-container">
                <img 
                  src={horizontalArrow} 
                  alt="View project" 
                  className="work-item-arrow" 
                />
              </div>
            </Link>
          </div>
          
          {/* Farmoid Project */}
          <div className="work-item">
            <Link to="/farmoid-case-study" className="work-item-link">
              <div className="work-item-image-container">
                <img 
                  src={FarmoidRobotech}
                  alt="Farmoid Robotech Project"
                  className="work-item-image"
                />
              </div>
              <div className="work-item-content">
                <h3 className="work-item-title">App for Farmoid Robotech</h3>
                <div className="work-item-description">
                  <p>Smart Farming</p>
                </div>
              </div>
              <div className="work-item-arrow-container">
                <img 
                  src={horizontalArrow} 
                  alt="View project" 
                  className="work-item-arrow" 
                />
              </div>
            </Link>
          </div>

         {/* Smart watch Project */}
         <div className="work-item">
            <Link to="/smart-watch-study" className="work-item-link">
              <div className="work-item-image-container">
                <img 
                  src={SmartWatch}
                  alt="Bus Travel Project"
                  className="work-item-image"
                />
              </div>
              <div className="work-item-content">
                <h3 className="work-item-title">Daily Nutrition Tracker</h3>
                <div className="work-item-description">
                  <p>Smart Watch</p>
                </div>
              </div>
              <div className="work-item-arrow-container">
                <img 
                  src={horizontalArrow} 
                  alt="View project" 
                  className="work-item-arrow" 
                />
              </div>
            </Link>
          </div>

          {/* Bus Travel Project */}
          <div className="work-item">
            <Link to="/bus-case-study" className="work-item-link">
              <div className="work-item-image-container">
                <img 
                  src={BusTravel}
                  alt="Bus Travel Project"
                  className="work-item-image"
                />
              </div>
              <div className="work-item-content">
                <h3 className="work-item-title">Easy Bus Travel</h3>
                <div className="work-item-description">
                  <p>LCD Screen</p>
                </div>
              </div>
              <div className="work-item-arrow-container">
                <img 
                  src={horizontalArrow} 
                  alt="View project" 
                  className="work-item-arrow" 
                />
              </div>
            </Link>
          </div>

          {/* MealMap Project */}
          <div className="work-item">
            <Link to="/mealmap-case-study" className="work-item-link">
              <div className="work-item-image-container">
                <img 
                  src={MealMap}
                  alt="MealMap Project"
                  className="work-item-image"
                />
              </div>
              <div className="work-item-content">
                <h3 className="work-item-title">App for Gym Meal Prepare</h3>
                <div className="work-item-description">
                  <p>MealMap</p>
                </div>
              </div>
              <div className="work-item-arrow-container">
                <img 
                  src={horizontalArrow} 
                  alt="View project" 
                  className="work-item-arrow" 
                />
              </div>
            </Link>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Hero;