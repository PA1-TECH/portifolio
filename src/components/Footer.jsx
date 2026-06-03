import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
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
    <footer className="footer-wrapper">
      <div className="container footer-content">
        
        <ul className="footer-nav">
          <li><a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a></li>
          <li><a href="#education" onClick={(e) => handleNavLinkClick(e, 'education')}>Education</a></li>
          <li><a href="#certificates" onClick={(e) => handleNavLinkClick(e, 'certificates')}>Certificates</a></li>
          <li><a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a></li>
        </ul>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Madu Pavan Kumar. All Rights Reserved.</p>
          
          <button 
            onClick={handleScrollToTop} 
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
