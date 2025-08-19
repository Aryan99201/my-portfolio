import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Aryan</span>
            </h1>
            <h2 className="hero-subtitle">Cybersecurity Enthusiast & Developer</h2>
            <p className="hero-description">
              I'm a passionate cybersecurity enthusiast and developer with expertise in 
              ethical hacking, digital forensics, and secure software development. I love 
              exploring security vulnerabilities, building safe simulation tools, and 
              contributing to a more secure digital world through responsible research 
              and development.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              {/* Your local photo */}
              <img 
                src="/my-photo.jpg" 
                alt="Aryan - Cybersecurity Enthusiast" 
                className="profile-photo"
              />
              <div className="image-bg"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;