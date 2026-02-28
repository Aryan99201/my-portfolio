import React from 'react';

const CATEGORIES = [
  {
    cmd: 'languages --list',
    title: 'Programming Languages',
    skills: ['Python', 'C', 'C++', 'JavaScript', 'SQL'],
  },
  {
    cmd: 'web --stack',
    title: 'Web Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
  },
  {
    cmd: 'security --domains',
    title: 'Cybersecurity',
    skills: ['Ethical Hacking', 'Digital Forensics', 'OSINT', 'Cryptography', 'Network Security'],
  },
  {
    cmd: 'cs --fundamentals',
    title: 'Computer Science',
    skills: ['Data Structures', 'Algorithms', 'OS Concepts', 'Databases', 'Software Engineering'],
  },
];

const EXTRA = [
  'Penetration Testing', 'Vulnerability Assessment', 'Linux',
  'Windows Security', 'Network Analysis', 'Incident Response',
  'Malware Analysis', 'Security Auditing',
];

const Skills = () => (
  <section id="skills" className="skills">
    <div className="skills-number" aria-hidden="true">02</div>

    <div className="container">
      <div className="section-header">
        <p className="section-label">Technical Skills</p>
        <h2>What I work with</h2>
      </div>

      <div className="skills-grid">
        {CATEGORIES.map((cat, i) => (
          <div className="terminal-card" key={i}>
            <div className="terminal-titlebar">
              <div className="terminal-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="terminal-title">{cat.title}</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">aryan@sec:~$ </span>
                <span className="cmd">{cat.cmd}</span>
              </div>
              <div className="skill-chips">
                {cat.skills.map((s, j) => (
                  <span className="skill-chip" key={j}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="skills-extra">
        <p className="skills-extra-title">&#47;&#47; Additional tools &amp; techniques</p>
        <div className="skills-extra-list">
          {EXTRA.map((s, i) => (
            <span className="extra-tag" key={i}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
