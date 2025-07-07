import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import templeImage1 from '../img/research/design 2 - Display of input text-1.png';
import templeImage2 from '../img/research/design 2 - Display of input text-2.png';
import templeImage4 from '../img/research/design 2 - Display of input text-4.png';
import templeImage5 from '../img/research/design 2 - Display of input text.png';
import templeImage6 from '../img/research/design 2 - Display of input text-5.png';
import templeImage7 from '../img/research/desin 1 - hovering image below the text ok.png';
import templeImage8 from '../img/research/design 2 - Display of input text1.png';
import templeImage9 from '../img/research/iPhone 13 & 14 - 11 ok.png';
import templeImage10 from '../img/research/iPhone 13 & 14 - 12.png';
import templeImage11 from '../img/research/iPhone 13 & 14 - 17.png';
import templeImage12 from '../img/research/iPhone 13 & 14 - 5.png';


const sections = [
  {
    id: 1,
    title: "The Problem I Addressed",
    description: [
      "This project was part of my final-year HCI research. I focused on helping deaf students communicate better with hearing people. Many of these users also have limited literacy in Sinhala or English, making normal apps hard to use. The goal was to design a mobile app that is simple, visual, and friendly — so even low-literate users can use it with ease. Most importantly, the app helps them communicate with hearing people in real time, without needing sign language or assistance from others.",
    ],
  },
  {
    id: 2,
    title: "Understanding the Users",
    description: [
      "To understand their real needs, I visited a local deaf school and spoke with both students and teachers. Most of the students said they wanted a simple, easy-to-use app for real-time communication with others. They didn’t want something too complex  — just a clean and friendly design that helps them communicate quickly without confusion. This feedback helped me focus on making the interface clear, minimal, and supportive of quick, natural conversations.",
     
    ],
  },
  {
    id: 3,
    title: "Design Decisions Based on Research",
    description: [
      "I did a competitive analysis of apps like Google Live Transcribe and Ava. While they had good speech recognition, they didn’t support Sinhala, had too much text, and didn’t include visuals to support understanding. Based on this, I knew my design needed to be more visual, language-friendly, and simple. I tested different color schemes, font sizes, and icon styles with users to find what they found easiest to see and understand. For example, I used images for replies to make functions clear without text. I also created different layout versions and did A/B testing with deaf students to select the one they understood and used most comfortably.",
    ],
    
  },
  {
    id: 4,
    title: "Recording",
    description: [
      "For deaf users, the idea of 'recording' means listening, and converting back to voice means speaking. So, I used icons from the deaf user’s perspective — an ear icon for listening and a speaking face icon for replying. The design of this screen is very simple, with large buttons and clear visuals, making it easy to understand and use without reading any text.",
    ],
    images: [templeImage12,templeImage11, templeImage9,templeImage10]
  },
  {
    id: 5,
    title: "Memory & History",
    description: [
      "Many users use the same replies again and again. So, I added a memory screen to save favorite responses. Users can select and reuse them easily. They can also edit a saved memory if they want. This makes daily use faster and more personal.",
      "The history screen shows past conversations in a simple format. Users can select any previous chat and continue the conversation from where it stopped. This helps them easily follow up without needing to repeat everything again."
    ],
    images: [templeImage4, templeImage6]
  },
  {
    id: 6,
    title: "Response Generation & Editing",
    description: [
      "The app shows a list of suggested responses in card format with sin images. Tapping a response will instantly send it as a voice reply. If the user presses and holds a response, an edit option appears, allowing them to change the message before sending. After editing, the final response is converted to voice using text-to-speech. This setup keeps the interaction fast and simple while still giving users flexibility when needed.",
      
    ],
    images: [templeImage8,templeImage2, templeImage5, templeImage7]
  },
  {
    id: 7,
    title: "Image Support for Difficult Words",
    description: [
      "Since many deaf users have limited literacy, the app helps them understand hard Sinhala words through images. When a difficult word appears, it is automatically underlined. When the user clicks on the word, an image related to that word.This visual aid makes it easier for users to understand the message without needing to read complex text.",
      
    ],
    images: [templeImage1]
  },

];

const FarmoidCSPage = () => {
  const [visibleSections, setVisibleSections] = useState([]);

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

  const renderDescription = (section) => {
    if (section.id === 2) {
      return (
        <div style={{
          fontSize: '1.1rem',
          margin: '0 0 20px 0',
          lineHeight: '1.8',
          color: '#34495e',
          letterSpacing: '0.3px'
        }}>
          {section.description.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '10px' }}>
              {item.startsWith('•') ? (
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '8px' }}>•</div>
                  <div>{item.substring(1)}</div>
                </div>
              ) : (
                <div>{item}</div>
              )}
            </div>
          ))}
        </div>
      );
    } else if (Array.isArray(section.description)) {
      return (
        <div style={{
          fontSize: '1.1rem',
          margin: '0 0 20px 0',
          lineHeight: '1.8',
          color: '#34495e',
          letterSpacing: '0.3px'
        }}>
          {section.description.map((item, idx) => (
            <p key={idx} style={{ marginBottom: '15px' }}>
              {item}
            </p>
          ))}
        </div>
      );
    } else {
      return (
        <p style={{
          fontSize: '1.1rem',
          margin: '0 0 20px 0',
          lineHeight: '1.8',
          color: '#34495e',
          letterSpacing: '0.3px'
        }}>
          {section.description}
        </p>
      );
    }
  };

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <a href="/" style={{ color: '#2c3e50', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.5rem' }} />
          </a>
          <h1 style={{
            fontSize: '2.2rem',
            fontWeight: '450',
            color: '#2c3e50',
            margin: 0,
            textAlign: 'left',
          }}>
            Signify <span style={{fontSize: '1.5rem',fontWeight: '400'}}>| Real time Communication App for Deaf</span>
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
                fontSize: '1.8rem',
                margin: '0 0 20px 0',
                fontWeight: '700',
                color: '#2c3e50',
                textAlign: 'left',
                lineHeight: '1.3',
                letterSpacing: '0.5px'
              }}>{section.title}</h2>
              
              {renderDescription(section)}
            </div>

            {section.imageUrl && (
              <div style={{
                width: 'fit-content',
                padding: '15px',
                backgroundColor: 'white',
                borderRadius: '15px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                display: 'flex',
                justifyContent: 'center',
                margin: '10px auto',
                border: '1px solid #f0f0f0'
              }}>
                <img 
                  src={section.imageUrl} 
                  alt={section.title}
                  style={{
                    width: '50%',
                    maxWidth: '500px',
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
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: section.images.length === 1 ? '500px' : '100%',
    margin: section.images.length === 1 ? '0 auto' : '0'
  }}>
    {section.images.map((image, index) => (
      <div key={index} style={{
        width: '100%',
        padding: '15px',
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
            width: section.images.length === 1 ? '80%' : '100%',
            maxWidth: section.images.length === 1 ? '350px' : '100%',
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
}

export default FarmoidCSPage;