import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null); // 'success' or 'error'

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');
    
    // Simulate API request
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({});
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
        </div>

        <div className="contact-grid">
          
          {/* Contact details list */}
          <div className="contact-info-list">
            
            <div className="glass-panel contact-info-card" style={{ position: 'relative' }}>
              <div className="contact-info-icon-wrapper">
                <Mail size={20} />
              </div>
              <div className="contact-info-details">
                <span className="contact-info-label">Email Address</span>
                <span className="contact-info-value">mpavankumartech06@gmail.com</span>
              </div>
              <button
                onClick={() => copyToClipboard('mpavankumartech06@gmail.com', 'email')}
                style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check size={16} style={{ color: 'var(--accent)' }} /> : <Copy size={16} />}
              </button>
            </div>

            <div className="glass-panel contact-info-card" style={{ position: 'relative' }}>
              <div className="contact-info-icon-wrapper">
                <Phone size={20} />
              </div>
              <div className="contact-info-details">
                <span className="contact-info-label">Phone Number</span>
                <span className="contact-info-value">+91 9963301996</span>
              </div>
              <button
                onClick={() => copyToClipboard('+919963301996', 'phone')}
                style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check size={16} style={{ color: 'var(--accent)' }} /> : <Copy size={16} />}
              </button>
            </div>

            <a
              href="https://www.linkedin.com/in/pavan-kumar-madu-2934b231a"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel contact-info-card"
            >
              <div className="contact-info-icon-wrapper">
                <Linkedin size={20} />
              </div>
              <div className="contact-info-details">
                <span className="contact-info-label">LinkedIn</span>
                <span className="contact-info-value">pavan-kumar-madu-2934b231a</span>
              </div>
            </a>

            <a
              href="https://github.com/PA1-TECH"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel contact-info-card"
            >
              <div className="contact-info-icon-wrapper">
                <Github size={20} />
              </div>
              <div className="contact-info-details">
                <span className="contact-info-label">GitHub</span>
                <span className="contact-info-value">PA1-TECH</span>
              </div>
            </a>

          </div>

          {/* Contact form panel */}
          <div className="glass-panel contact-form-wrapper">
            <h3 className="form-title">Send a Message</h3>
            <p className="form-subtitle">Have a question or want to work together? Drop me a message below.</p>
            
            <form onSubmit={handleSubmit}>
              
              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="John Doe"
                  />
                  {formErrors.name && <span className="form-error-msg">{formErrors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="john@example.com"
                  />
                  {formErrors.email && <span className="form-error-msg">{formErrors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Inquiry / Partnership Opportunity"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Write your message here..."
                ></textarea>
                {formErrors.message && <span className="form-error-msg">{formErrors.message}</span>}
              </div>

              {formStatus === 'success' && (
                <div className="form-status-alert success">
                  <Check size={16} />
                  <span>Success! Your message was submitted. I'll get back to you shortly.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="form-status-alert error">
                  <AlertCircle size={16} />
                  <span>Error: Please fill in all required fields correctly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {formStatus === 'sending' ? (
                  'Sending Message...'
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
