import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificatesData = [
    {
      title: 'Data Analytics',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      link: 'https://drive.google.com/file/d/1-uw7GHheHRUDp1slVqfU5n-NglHxLT0a/view?usp=sharing',
      date: 'NPTEL Certified',
      description: 'Rigorous coursework and examination covering statistical data analysis, regression, machine learning algorithms, and data-driven decision making.'
    },
    {
      title: 'AI Fundamentals',
      issuer: 'IBM',
      link: 'https://drive.google.com/file/d/1rzG1KjZJTaMzT70PgbI9wrj7kcRTvkCA/view?usp=sharing',
      date: 'IBM Certified',
      description: 'Comprehensive introduction to artificial intelligence concepts, neural networks, deep learning, ethics in AI, and practical applications of machine learning models.'
    },
    {
      title: 'Generative AI',
      issuer: 'Infosys',
      link: 'https://drive.google.com/file/d/1-dhTO2-bdnvFZMjUtLzogPVbGwqXVujb/view?usp=sharing',
      date: 'Infosys Certified',
      description: 'Comprehensive study of Large Language Models (LLMs), prompt engineering, transformer architectures, diffusion models, and deploying Generative AI applications.'
    },
    {
      title: 'E-Cell Campus Ambassador',
      issuer: 'E-Cell',
      link: 'https://drive.google.com/file/d/1Wg0E6CmYN9tRZQdLSn5CNxL_8IhV23uu/view?usp=sharing',
      date: 'E-Cell Certified',
      description: 'Promoted entrepreneurial mindset, organized campus-wide startup events, and facilitated workshops on business planning and leadership development.'
    },
    {
      title: 'Salesforce Certificate',
      issuer: 'Salesforce',
      link: 'https://drive.google.com/file/d/1NMQhJJWSS5kvB9vQOIe0oj5qSDqVjXfQ/view?usp=sharing',
      date: 'Salesforce Certified',
      description: 'Hands-on experience with Salesforce CRM, configuring objects, workflows, security settings, and designing custom dashboards and reports.'
    },
    {
      title: 'Gen AI Powered Data Analytics Job Simulation',
      issuer: 'Forage',
      link: 'https://drive.google.com/file/d/1rGGc2x-cE1Th8xQ6tGFwR1INhQUqcpDo/view?usp=sharing',
      date: 'Forage Certified',
      description: 'Simulated real-world consultant tasks applying generative AI techniques to analyze data patterns, automate reports, and generate business insights.'
    },
    {
      title: 'Quantum Fundamentals',
      issuer: 'Infosys',
      link: 'https://drive.google.com/file/d/10p2ZnzHAxJleeRqMBCFMZeCJ05TrOWdC/view?usp=sharing',
      date: 'Infosys Certified',
      description: 'Explored principles of quantum computing, including qubits, superposition, entanglement, and basic quantum algorithms and programming.'
    }
  ];

  return (
    <section id="certificates" className="certificates-section" style={{ padding: '6rem 0' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="grid-3">
          {certificatesData.map((cert, idx) => (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{ 
                padding: '2.25rem', 
                borderRadius: '1rem', 
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '0.75rem',
                    background: 'rgba(139, 92, 246, 0.08)',
                    border: '1px solid rgba(139, 92, 246, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--secondary)',
                    flexShrink: 0
                  }}>
                    <Award size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>
                      {cert.date}
                    </span>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>{cert.title}</h3>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{cert.issuer}</h4>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
                  {cert.description}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
