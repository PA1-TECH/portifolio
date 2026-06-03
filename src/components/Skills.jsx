import React, { useEffect, useState } from 'react';
import { Code, Cpu, MessageSquare } from 'lucide-react';

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Small delay to trigger smooth transition animations
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: 'Programming & Markup',
      icon: <Code size={20} />,
      skills: [
        { name: 'Python', percentage: 90, color: 'var(--primary)' },
        { name: 'HTML5', percentage: 95, color: 'var(--primary)' },
        { name: 'CSS3', percentage: 88, color: 'var(--primary)' }
      ]
    },
    {
      title: 'AI & Data Science',
      icon: <Cpu size={20} />,
      skills: [
        { name: 'Data Science', percentage: 85, color: 'var(--secondary)' },
        { name: 'Generative AI', percentage: 80, color: 'var(--secondary)' }
      ]
    },
    {
      title: 'Core Capabilities',
      icon: <MessageSquare size={20} />,
      skills: [
        { name: 'Communicational Skills', percentage: 92, color: 'var(--accent)' },
        { name: 'Analytical Thinking', percentage: 88, color: 'var(--accent)' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Skills</span>
          <h2 className="section-title">What I Excel In</h2>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="glass-panel skills-category-card">
              <div className="skills-category-header">
                <div className="skills-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="skills-category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: animate ? `${skill.percentage}%` : '0%',
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}55`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
