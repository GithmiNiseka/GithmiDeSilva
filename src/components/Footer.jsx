import React from 'react';
import topArrow from '../img/topArrow.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={{
      marginTop:'40px',
      backgroundColor: '#DEDEDE',
      maxWidth: '100%',
      padding: '0.5rem 0', // Reduced padding to decrease height
      position: 'relative',
      borderTop: '1px solid #e5e7eb',
      textAlign: 'center'
    }} className="dark:bg-gray-900 dark:border-gray-700">
      {/* Scroll to top arrow - positioned in right corner */}
      <div style={{
        position: 'absolute',
        right: '20px',
        top: '-25px',  // Adjusted to match smaller footer height
        marginBottom: '0.5rem'
      }}>
        <img 
          src={topArrow}
          alt="Scroll to top"
          style={{
            width: '60px',
            height: '60px',
            cursor: 'pointer',
          }}
          onClick={scrollToTop}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
        />
      </div>
      
      <div style={{ 
        margin: '0 auto', 
        maxWidth: '1200px', 
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        <p style={{
          color: '#4b5563',
          margin: 0,
          padding: '0.5rem 0'  // Reduced padding to decrease height
        }} className="dark:text-gray-400">
          © {new Date().getFullYear()} Githmi De Silva. All rights reserved.
        </p>
      </div>
    </footer>
  );
}