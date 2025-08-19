import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "C", level: 80 },
        { name: "C++", level: 84 },
        { name: "JavaScript", level: 70 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "Responsive Design", level: 72 },
        { name: "Web Security", level: 85 }
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Ethical Hacking", level: 88 },
        { name: "Digital Forensics", level: 82 },
        { name: "OSINT", level: 85 },
        { name: "Cryptography", level: 80 },
        { name: "Network Security", level: 83 }
      ]
    },
    {
      title: "Computer Science",
      skills: [
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "Operating Systems", level: 85 },
        { name: "Computer Networks", level: 80 },
        { name: "Database Management", level: 82 },
        { name: "Software Engineering", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <p>Here are the technologies and cybersecurity skills I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Additional Technologies & Tools</h3>
          <div className="tech-tags">
            {["Penetration Testing", "Vulnerability Assessment", "Linux", "Windows Security", "Network Analysis", "Incident Response", "Malware Analysis", "Security Auditing"].map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;