import React, { useState, useEffect } from 'react';

const TYPING_SPEED_MS = 70;
const DELETE_SPEED_MS = 40;
const PAUSE_DURATION_MS = 2000;

const ROLES = [
  'Cybersecurity Enthusiast',
  'Ethical Hacker',
  'Security Researcher',
  'Python Developer',
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), TYPING_SPEED_MS);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_DURATION_MS);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), DELETE_SPEED_MS);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg-dots" aria-hidden="true"></div>

      <div className="container">
        <div className="hero-content">

          {/* Left — Text */}
          <div className="hero-text">
            <p className="hero-tag">Cybersecurity &amp; Development</p>

            <h1 className="hero-title">
              Hi, I'm<br />
              <span className="name-accent">Aryan</span>
              <span className="period">.</span>
            </h1>

            <div className="typewriter-wrapper">
              <span className="typewriter-prompt">~/</span>
              <span className="typewriter-text">{displayed}</span>
              <span className="cursor" aria-hidden="true"></span>
            </div>

            <p className="hero-description">
              Passionate about ethical hacking, digital forensics, and secure
              software development. I explore security vulnerabilities, build safe
              simulation tools, and contribute to a more secure digital world
              through responsible research and development.
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

          {/* Right — Photo */}
          <div className="hero-visual">
            <div className="photo-frame">
              <img
                src="/my-photo.jpg"
                alt="Aryan — Cybersecurity Enthusiast"
                className="profile-photo"
              />
              <div className="photo-stats">
                <div className="stat-number">1+</div>
                <div className="stat-label">Yrs Experience</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <div className="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;
