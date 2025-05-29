import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './Skills.css';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const skillsData = [
    {
      category: t.skills.categories.frontend,
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 88, icon: "🟨" },
        { name: "Next.js", level: 80, icon: "⚫" },
        { name: "Tailwind", level: 85, icon: "💨" }
      ]
    },
    {
      category: t.skills.categories.backend,
      skills: [
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "Express", level: 78, icon: "🚀" },
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "PostgreSQL", level: 72, icon: "🐘" },
        { name: "REST API", level: 85, icon: "🔗" }
      ]
    },
    {
      category: t.skills.categories.tools,
      skills: [
        { name: "Git", level: 88, icon: "🔄" },
        { name: "VS Code", level: 95, icon: "💙" },
        { name: "Figma", level: 80, icon: "🎯" },
        { name: "Docker", level: 65, icon: "🐳" },
        { name: "AWS", level: 60, icon: "☁️" },
        { name: "Webpack", level: 70, icon: "📦" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>
        <p className="section-subtitle">
          {t.skills.subtitle}
        </p>

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

        <div className="skills-summary">
          <div className="summary-card">
            <h4>{t.skills.summary.approach.title}</h4>
            <p>
              {t.skills.summary.approach.description}
            </p>
          </div>
          <div className="summary-card">
            <h4>{t.skills.summary.learning.title}</h4>
            <p>
              {t.skills.summary.learning.description}
            </p>
          </div>
          <div className="summary-card">
            <h4>{t.skills.summary.collaboration.title}</h4>
            <p>
              {t.skills.summary.collaboration.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
