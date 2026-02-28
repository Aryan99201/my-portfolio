import React from 'react';

const PROJECTS = [
  {
    index: '01',
    category: 'Cybersecurity / Cryptography',
    title: 'Ransomware Simulator',
    description:
      'A safe ransomware simulation built to demonstrate how file encryption works in a controlled environment. Implemented AES-based cryptography to encrypt and decrypt files, while ensuring that all security testing was performed without real-world harm.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
    tech: ['AES Encryption', 'Python', 'Cryptography', 'File I/O', 'Cybersecurity'],
    github: 'https://github.com/Aryan99201',
    live: null,
  },
];

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
  </svg>
);

const Projects = () => (
  <section id="projects" className="projects">
    <div className="projects-number" aria-hidden="true">03</div>

    <div className="container">
      <div className="section-header">
        <p className="section-label">My Work</p>
        <h2>Featured Project</h2>
      </div>

      {PROJECTS.map((p, i) => (
        <div className="project-featured" key={i}>
          {/* Image */}
          <div className="project-img-wrap">
            <img src={p.image} alt={p.title} />
            <div className="project-img-overlay"></div>
            <span className="project-index">{p.index}</span>
          </div>

          {/* Content */}
          <div className="project-body">
            <div>
              <p className="project-category">{p.category}</p>
              <h3 className="project-name">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tech-list">
                {p.tech.map((t, j) => (
                  <span className="tech-pill" key={j}>{t}</span>
                ))}
              </div>
            </div>
            <div className="project-actions">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                <GithubIcon /> Source Code
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  <ExternalIcon /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="more-projects-row">
        <p>Want to see more cybersecurity work?</p>
        <a
          href="https://github.com/Aryan99201"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <GithubIcon /> Visit GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
