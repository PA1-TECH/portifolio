import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')} className="logo">
          PAVAN <span>KUMAR</span>
        </a>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => handleNavLinkClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social / Contact Icons */}
        <div className="social-links" style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="https://github.com/PA1-TECH"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/pavan-kumar-madu-2934b231a"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:mpavankumartech06@gmail.com"
            className="social-icon"
            aria-label="Email Me"
          >
            <Mail size={18} />
          </a>
          
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            style={{ marginLeft: '1rem' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-drawer"
          style={{
            position: 'absolute',
            top: '70px',
            left: 0,
            width: '100%',
            background: 'rgba(8, 11, 17, 0.95)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid var(--border-color)',
            padding: '2rem',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
              onClick={(e) => handleNavLinkClick(e, link.id)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: activeSection === link.id ? 'var(--primary)' : 'var(--text-secondary)',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.03)'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
