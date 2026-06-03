import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code } from 'lucide-react';
import pavanPic from '../assets/pic.jpg';

export default function Hero() {
  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-content">
            <div className="hero-label">
              <span className="pulse-dot"></span>
              <Sparkles size={14} style={{ color: 'var(--primary)' }} />
              Open to Opportunities
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <br />
              <span className="gradient-text">MADU PAVAN KUMAR</span>
            </h1>
            
            <h2 className="hero-subtitle">
              Computer Science & Engineering Student
            </h2>

            
            <div className="hero-btns">
              <button 
                onClick={() => handleScrollTo('projects')}
                className="btn btn-primary"
              >
                View Projects <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => handleScrollTo('contact')}
                className="btn btn-secondary"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-art-container">
            {/* Circular Profile Photo */}
            <div 
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.25)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src={pavanPic} 
                alt="Madu Pavan Kumar" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            
          </div>
          
        </div>
      </div>
    </section>
  );
}
