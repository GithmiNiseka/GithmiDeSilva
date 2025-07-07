import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import templeImage1 from '../img/trusted/iPhone 13 & 14 - 1.png';
import templeImage2 from '../img/trusted/iPhone 13 & 14 - 2.png';
import templeImage3 from '../img/trusted/iPhone 13 & 14 - 3.png';
import templeImage4 from '../img/trusted/iPhone 13 & 14 - 5.png';
import templeImage5 from '../img/trusted/iPhone 13 & 14 - 7.png';
import templeImage6 from '../img/trusted/iPhone 13 & 14 - 6.png';
import templeImage7 from '../img/trusted/iPhone 13 & 14 - 8.png';
import templeImage8 from '../img/trusted/iPhone 13 & 14 - 9.png';
import templeImage9 from '../img/trusted/iPhone 13 & 14 - 10.png';
import templeImage10 from '../img/trusted/iPhone 13 & 14 - 11.png';
import templeImage11 from '../img/trusted/iPhone 13 & 14 - 4.png';

const sections = [
  {
    id: 1,
    title: "The Problem I Addressed",
    description: [
      "Elderly people often face memory challenges due to aging, making it difficult for them to remember daily activities like taking medicine, attending doctor appointments, or calling family members. Their children or caregivers want to help, but are often living far away or busy with their own work and cannot remind them every time. This creates a gap in daily support, safety, and emotional connection.",
    ],
  },
  {
    id: 2,
    title: "How I approach the Work",
    description: [
      "I designed a two-sided system",
      "• A simple, voice-assisted interface for elderly users that helps them follow their schedule and stay connected with loved ones.",
      "• A mobile caregiver interface where children or caregivers can set up reminders, manage emergency contacts, and track if tasks are completed or missed — all remotely."
    ],
  },
  {
    id: 3,
    title: "Interaction & Cognitive Insights",
    description: [
      "Allows caregivers to monitor their elderly loved one's daily behavior and routine. It shows a list of repeated or confused questions asked to the Buddy assistant, helping identify early signs of memory decline. The UI also displays medication adherence, showing whether reminders were marked as completed, missed, or still pending. If an important reminder is missed, the system sends an alert to the caregiver. This screen brings together cognitive activity, task tracking, and real-time alerts — helping caregivers provide timely and informed support, even from a distance.",
    ],
    imageUrl: templeImage6
  },
  {
    id: 4,
    title: "Reminder Status Tracker",
    description: [
      "This helps caregivers or children manage and monitor the elderly person's daily routines. They can view, edit, or delete existing reminders and check the status of each one—whether it's marked as completed, missed, or in progress. The UI also includes a calendar view, allowing them to navigate to past reminders and review previous activities. New reminders can also be added from this screen, keeping everything in one easy-to-manage place. This UI ensures the elderly person's routine is followed, while helping caregivers stay informed and in control at all times.",
    ],
    images: [templeImage11, templeImage4]
  },
  {
    id: 5,
    title: "Trusted Contacts",
    description: [
      "This UI allows caregivers or children to manage all important contacts for the elderly person. They can add, view, edit, or delete trusted contacts such as family members, friends, or doctors. Each contact includes a photo, name, role, phone number, and priority level (e.g., emergency, primary). Caregivers can also call or message a contact directly from this screen and view detailed information when needed. These contacts become easily accessible to the elderly user through large buttons or voice commands, ensuring they can quickly reach someone they trust — especially in urgent situations.",
    ],
    images: [templeImage5, templeImage7]
  },
  {
    id: 6,
    title: "Elderly-Side UIs",
    description: [
      "The Reminder Viewer UI displays daily tasks in large, easy-to-read text with a clean and simple layout. Each reminder can be quickly marked as completed by swiping left, making interaction effortless. If a reminder is missed, it disappears automatically to reduce confusion or clutter. This UI helps elderly users stay on track without feeling overwhelmed.",
      "The Call & Message UI presents trusted contacts using large photo cards and bold labels, allowing elderly users to easily identify and connect with loved ones. They can call or send a message with a single tap or use a voice command like 'Call Anna,' supporting both independence and safety in communication.",
      "The Voice Assistant UI enables elderly users to interact with the system by simply speaking. This makes navigating features easy, even for those with vision or mobility challenges.",
    ],
    images: [templeImage8, templeImage1, templeImage10]
  },
  {
    id: 7,
    title: "Add Reminders & Contacts",
    description: [
      "Caregivers can add reminders by setting the task name, time, repeat options, and choosing a voice tone (gentle, doctor-like, etc.) to match the elderly person's comfort. It helps personalize and schedule daily routines easily.",
      "Caregivers can add trusted contacts by entering the name, role, phone number, and photo. These appear on the elderly person's device for quick calling or messaging through buttons or voice.",
    ],
    images: [templeImage2, templeImage3]
  },
  {
    id: 8,
    title: "Connect Devices",
    description: [
      "Caregivers can securely connect their app to the elderly person's Buddy device by scanning a QR code or entering a verification code shown on the elder's screen. Once linked, they can manage reminders, contacts, and receive alerts remotely.",
    ],
    imageUrl: templeImage9
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
    Trusted Circle <span style={{
      fontSize: '1.5rem',
      fontWeight: '400',
      display: 'block',
      marginTop: '8px',
      color: '#7f8c8d'
    }}>| Connect and care for Elders remotely</span>
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
                    width: '90%',
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
                width: '100%'
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
                        width: '100%',
                        maxWidth: '100%',
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