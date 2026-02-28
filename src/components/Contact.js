import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const CONTACT_INFO = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: 'Email',
    value: 'aryanyadav99201@gmail.com',
    href: 'mailto:aryanyadav99201@gmail.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 8708149503',
    href: 'tel:+918708149503',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    label: 'Location',
    value: 'Una, Himachal Pradesh',
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitMessage('Please fill in all fields.');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage('Please enter a valid email address.');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Aryan',
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitMessage("Thanks! I'll get back to you soon.");
        setMessageType('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage('Something went wrong. Try emailing me directly at aryanyadav99201@gmail.com');
      setMessageType('error');
    }

    setIsSubmitting(false);
    setTimeout(() => { setSubmitMessage(''); setMessageType(''); }, 6000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-number" aria-hidden="true">04</div>

      <div className="container">
        <div className="section-header">
          <p className="section-label">Contact</p>
          <h2>Let's work together</h2>
        </div>

        <div className="contact-layout">

          {/* Left — Info */}
          <div className="contact-info-block">
            <h3>Open to opportunities</h3>
            <p>
              Whether you have a security project, want to collaborate on research,
              or just want to say hi — my inbox is always open.
            </p>

            <ul className="contact-list">
              {CONTACT_INFO.map((item, i) => (
                <li className="contact-list-item" key={i}>
                  <div className="contact-icon-box">{item.icon}</div>
                  <div>
                    <p className="ci-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="ci-value">{item.value}</a>
                    ) : (
                      <span className="ci-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="social-row">
              <p className="social-row-label">Find me on</p>
              <div className="social-icons">
                <a href="https://github.com/Aryan99201" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/aryan-yadav-a039a3281/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter / X">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form-block">
            <h3>Send a message</h3>

            {submitMessage && (
              <div className={`form-message ${messageType}`}>{submitMessage}</div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label htmlFor="name"><span className="f-prompt">$</span> name</label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  placeholder="Your full name" disabled={isSubmitting} required
                />
              </div>

              <div className="form-row">
                <label htmlFor="email"><span className="f-prompt">$</span> email</label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  placeholder="you@example.com" disabled={isSubmitting} required
                />
              </div>

              <div className="form-row">
                <label htmlFor="subject"><span className="f-prompt">$</span> subject</label>
                <input
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  placeholder="What's this about?" disabled={isSubmitting} required
                />
              </div>

              <div className="form-row">
                <label htmlFor="message"><span className="f-prompt">$</span> message</label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows="5" disabled={isSubmitting} required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <span className="footer-copy">
              © 2024 Aryan Yadav — Built with React
            </span>
            <div className="footer-links">
              <a href="https://github.com/Aryan99201" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/aryan-yadav-a039a3281/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

