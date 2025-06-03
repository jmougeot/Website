import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Skills.css';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  
  const skillsData = [
    {
      category: t.skills.categories.dataScience,
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "PyTorch", level: 85, icon: "🔥" },
        { name: "TensorFlow", level: 80, icon: "🧠" },
        { name: "Pandas", level: 88, icon: "🐼" },
        { name: "NumPy", level: 85, icon: "🔢" }
      ]
    },
    {
      category: t.skills.categories.frontend,
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "JavaScript", level: 88, icon: "🟨" },
        { name: "HTML/CSS", level: 95, icon: "🎨" }
      ]
    },
    {
      category: t.skills.categories.backend,
      skills: [
        { name: "Django", level: 82, icon: "🌿" },
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "SQL", level: 85, icon: "💾" },
        { name: "PostgreSQL", level: 72, icon: "🐘" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>
        <p className="section-subtitle">{t.skills.subtitle}</p>

        <div className="skills-grid">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
