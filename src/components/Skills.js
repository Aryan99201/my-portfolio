import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "JavaScript", "SQL"]
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Security"]
    },
    {
      title: "Cybersecurity",
      skills: ["Ethical Hacking", "Digital Forensics", "OSINT", "Cryptography", "Network Security"]
    },
    {
      title: "Computer Science",
      skills: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management", "Software Engineering"]
    }
  ];

  const additionalSkills = [
    "Penetration Testing", "Vulnerability Assessment", "Linux", "Windows Security", 
    "Network Analysis", "Incident Response", "Malware Analysis", "Security Auditing"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <p>Here are the technologies and cybersecurity skills I work with</p>
        </div>
        
        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category-card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-badges">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Additional Technologies & Tools</h3>
          <div className="additional-skills-grid">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="additional-skill-item">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;