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
            <h2 className="hero-subtitle">Web Developer</h2>
            <p className="hero-description">
              I'm a passionate web developer creating modern, responsive
              websites and applications. I love turning ideas 
              into beautiful, functional digital experiences using the latest 
              technologies and best practices.
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
              {/* My actual photo */}
              <img 
                src="/my-photo.jpg" 
                alt="Aryan - Web Developer" 
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