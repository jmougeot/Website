import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text fade-in-up">
          <h1>
            {t.hero.greeting} <span className="highlight">{t.hero.name}</span>
          </h1>
          <h2>{t.hero.title}</h2>
          <p>
            {t.hero.description}
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              {t.hero.contactButton}
            </button>
            <button className="btn-secondary" onClick={scrollToProjects}>
              {t.hero.projectsButton}
            </button>
          </div>
        </div>
        
        <div className="hero-visual float">
          <div className="hero-shape"></div>
          <div className="hero-card">
            <div className="card-content">
              <div className="code-snippet">
                <div className="code-line">
                  <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                </div>
                <div className="code-line indent">
                  <span className="property">name</span>: <span className="string">'{t.hero.codeSnippet.name}'</span>,
                </div>
                <div className="code-line indent">
                  <span className="property">skills</span>: [<span className="string">'{t.hero.codeSnippet.skills}'</span>],
                </div>
                <div className="code-line indent">
                  <span className="property">passion</span>: <span className="string">'{t.hero.codeSnippet.passion}'</span>
                </div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Découvrir</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
