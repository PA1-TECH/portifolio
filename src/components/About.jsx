import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">My Journey & Drive</h2>
        </div>

        <div className="about-grid">
          
          <div className="about-text-content">
            <p>
              I am <strong>Madu Pavan Kumar</strong>, a highly motivated Computer Science and Engineering student with a strong academic foundation in programming and software development.
            </p>
            <p>
              Passionate about applying classroom knowledge to real-world challenges, I enjoy gaining hands-on experience and building products that make a difference. My background in software engineering enables me to learn quickly, think analytically, and work effectively in collaborative team environments.
            </p>
            <p>
              I'm actively seeking opportunities to contribute to innovative projects and grow professionally in the tech industry, specifically in fields related to Python development, data science, and Generative AI.
            </p>

            <div className="about-highlights">
              <div className="glass-panel highlight-box">
                <h3>8.2</h3>
                <p>BTech CGPA</p>
              </div>
              <div className="glass-panel highlight-box">
                <h3>8.0</h3>
                <p>Intermediate CGPA</p>
              </div>
            </div>
          </div>

          <div className="about-visual-side">
            <div className="glass-panel profile-card">
              <div className="profile-avatar-wrapper">
                <div className="profile-avatar-inner">
                  👨‍💻
                </div>
              </div>
              <h3>Madu Pavan Kumar</h3>
              <p>CSE Student & Developer</p>
              
              <ul className="profile-details-list">
                <li>
                  <User size={16} />
                  <div>
                    <span className="contact-info-label" style={{ display: 'block', fontSize: '0.75rem' }}>Role</span>
                    <strong>Student / Developer</strong>
                  </div>
                </li>
                <li>
                  <Mail size={16} />
                  <div>
                    <span className="contact-info-label" style={{ display: 'block', fontSize: '0.75rem' }}>Email</span>
                    <strong>mpavankumartech06@gmail.com</strong>
                  </div>
                </li>
                <li>
                  <Phone size={16} />
                  <div>
                    <span className="contact-info-label" style={{ display: 'block', fontSize: '0.75rem' }}>Phone</span>
                    <strong>+91 9963301996</strong>
                  </div>
                </li>
                <li>
                  <MapPin size={16} />
                  <div>
                    <span className="contact-info-label" style={{ display: 'block', fontSize: '0.75rem' }}>Location</span>
                    <strong>Andhra Pradesh, India</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
