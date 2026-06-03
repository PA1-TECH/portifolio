import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      institution: 'NRI INSTITUTION OF TECHNOLOGY',
      degree: 'Bachelor of Technology (BTech)',
      period: '2023 - Present',
      gradeType: 'CGPA',
      grade: '8.2',
      icon: <GraduationCap size={18} />,
      desc: 'Focusing on computer science principles, database systems, software engineering, algorithms, and artificial intelligence.'
    },
    {
      institution: 'SRI SARADA JUNIOR COLLEGE',
      degree: 'Intermediate (Class XII)',
      period: '2021 - 2023',
      gradeType: 'CGPA',
      grade: '8.0',
      icon: <Award size={18} />,
      desc: 'Specialized in Mathematics, Physics, and Chemistry (MPC).'
    },
    {
      institution: 'RAMA KRISHNA HIGH SCHOOL',
      degree: 'Secondary School Certificate (SSC)',
      period: '2015 - 2021',
      gradeType: 'Grade',
      grade: 'First Class',
      icon: <BookOpen size={18} />,
      desc: 'Completed secondary education with strong analytical and basic science foundations.'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Education</span>
          <h2 className="section-title">My Academic Background</h2>
        </div>

        <div className="timeline-container">
          {educationData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="glass-panel timeline-card">
                <span className="timeline-date">{item.period}</span>
                
                <h3 className="timeline-title">{item.institution}</h3>
                <h4 className="timeline-subtitle">{item.degree}</h4>
                
                <p className="timeline-desc">{item.desc}</p>
                
                <div className="timeline-grade">
                  {item.icon}
                  <span>{item.gradeType}: {item.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
