import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import templeImage1 from '../img/verify1.png';
import templeImage2 from '../img/verifiy2.png';
import templeImage3 from '../img/verify3.png';
import templeImage4 from '../img/verify4.png';
import templeImage5 from '../img/verify5.png';

const DaladaCSPage = () => {
  const sections = [
    {
      id: 1,
      title: "The Problem I Addressed",
      description: "With the rise of AI-generated content, it's becoming increasingly easy to create fake or cloned influencer profiles. These fake profiles can deceive followers, scam brands, and damage the trust between influencers and their audiences.",
    },
    {
      id: 2,
      title: "How I approach the Work",
      description: "I designed a web-based platform that uses AI to help users visually analyze and compare social media profiles, making it easier to detect fake accounts, cloned influencers, and suspicious behavior. Since the project involved complex identity and AI data, I focused on keeping the experience clean and easy to follow. The design presents key insights—like authenticity scores, audience demographics, engagement quality, and risk levels—in a simple and visual way that anyone can understand.",
    },
    {
      id: 3,
      title: "Profile Scan",
      description: "Users can paste a social media profile link (e.g., Instagram, TikTok, etc.) to scan and analyze it using AI. They also have the option to add a second profile link, allowing them to run a side-by-side comparison. This screen gives users flexibility to either analyze a single profile or compare two, depending on their needs.",
      imageUrl: templeImage1
    },
    {
      id: 4,
      title: "Comprehensive Profile Analysis",
      description: "The Profile Analysis UI lets users analyze a single social media profile with AI, providing an overall authenticity score based on engagement, follower data, content originality, and risk factors. Key metrics like suspicious followers, content duplicity, and trust score are shown clearly, along with verification status and profile details. The interface offers recommended actions like monitoring and report generation. Simple explanations and color-coded indicators make the complex AI results easy to understand and build user trust.",
      imageUrl: templeImage3
    },
    {
      id: 5,
      title: "Dual Profile Comparison",
      description: [
        "This interface lets users compare two profiles side-by-side to identify suspicious similarities or authenticity gaps. The screen shows both profiles' key metrics — like follower counts, authenticity scores, engagement rates, and unusual behavior patterns. It highlights red flags for each user, along with a similarity index and audience overlap analysis. I used a visual, card-based structure so users can easily scan and compare without needing technical knowledge.",
        "Helps users detect copycat or AI-generated accounts by comparing trust factors visually and clearly."
      ],
      images: [templeImage4, templeImage5]
    },
    {
      id: 6,
      title: "User Profile Dashboard",
      description: "The user dashboard allows people to manage their own linked social media profiles, monitor impersonation threats, and track verification progress. From here, users can run a new comparison if they suspect someone is copying them, sync or disconnect profiles, and view reports they've submitted. A status tracker shows whether reported accounts are verified, under review, or confirmed fake. I included recent activity logs, action tips, and prompts to keep users informed and secure.",
      imageUrl: templeImage2
    },
  ];

  const [visibleSections, setVisibleSections] = useState([]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      
      sections.forEach(section => {
        const element = document.getElementById(`section-${section.id}`);
        if (element) {
          const elementPosition = element.offsetTop + (element.offsetHeight / 2);
          
          if (scrollPosition > elementPosition && !visibleSections.includes(section.id)) {
            setVisibleSections(prev => [...prev, section.id]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
<div style={{
      width: '100%',
      margin: 0,
      padding: '40px 20px',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
        width: '100%'
      }}>
        <div style={{ 
  display: 'flex', 
  alignItems: 'center', 
  gap: '30px',  // Increased gap for better separation
  marginBottom: '20px'  // Added margin at bottom
}}>
  <a 
    href="/" 
    style={{ 
      color: '#2c3e50', 
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60px',  // Fixed width for the icon box
      height: '60px',  // Fixed height for the icon box
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      ':hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
      }
    }}
  >
    <FontAwesomeIcon 
      icon={faHome} 
      style={{ 
        fontSize: '2rem',  // Larger icon size
        color: '#2c3e50'
      }} 
    />
  </a>
  <h1 style={{
    fontSize: '2.2rem',
    fontWeight: '450',
    color: '#2c3e50',
    margin: 0,
    textAlign: 'left',
    paddingLeft: '10px',  // Added padding to separate from icon
    borderLeft: '2px solid #e0e0e0'  // Added subtle border for separation
  }}>
            VeriFace <span style={{ fontSize: '1.5rem', fontWeight: '400' }}>Social Media Profile Verification</span>
          </h1>
        </div>

        {sections.map((section) => (
          <section 
            key={section.id}
            id={`section-${section.id}`}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              opacity: visibleSections.includes(section.id) ? 1 : 0,
              transform: visibleSections.includes(section.id) ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            <div style={{
              width: '100%',
              textAlign: 'justify',
              textJustify: 'inter-word',
              padding: '0 10px'
            }}>
              <h2 style={{
                fontSize: '1.6rem',
                margin: '0 0 20px 0',
                fontWeight: '520',
                color: '#2c3e50',
                textAlign: 'left',
                lineHeight: '1.3',
                letterSpacing: '0.5px'
              }}>{section.title}</h2>
              
              {Array.isArray(section.description) ? (
                section.description.map((paragraph, idx) => (
                  <p key={idx} style={{
                    fontSize: '1.1rem',
                    margin: '0 0 20px 0',
                    lineHeight: '1.8',
                    color: '#34495e',
                    letterSpacing: '0.3px'
                  }}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <p style={{
                  fontSize: section.id >= 3 ? '1.1rem' : '1.2rem',
                  margin: '0 0 20px 0',
                  lineHeight: '1.8',
                  color: '#34495e',
                  letterSpacing: '0.3px'
                }}>
                  {section.description}
                </p>
              )}
            </div>

            {section.imageUrl && (
              <div style={{
                width: '100%',
                padding: '25px',
                backgroundColor: 'white',
                borderRadius: '15px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '10px',
                border: '1px solid #f0f0f0'
              }}>
                <img 
                  src={section.imageUrl} 
                  alt={section.title}
                  style={{
                    width: '100%',
                    maxWidth: '1000px',
                    height: 'auto',
                    borderRadius: '10px',
                    objectFit: 'contain',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                  }} 
                />
              </div>
            )}

            {section.images && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                width: '100%'
              }}>
                {section.images.map((image, index) => (
                  <div key={index} style={{
                    width: '100%',
                    padding: '25px',
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    display: 'flex',
                    justifyContent: 'center',
                    border: '1px solid #f0f0f0'
                  }}>
                    <img 
                      src={image} 
                      alt={`${section.title} ${index + 1}`}
                      style={{
                        width: '100%',
                        maxWidth: '1000px',
                        height: 'auto',
                        borderRadius: '10px',
                        objectFit: 'contain',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                      }} 
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
};

export default DaladaCSPage;