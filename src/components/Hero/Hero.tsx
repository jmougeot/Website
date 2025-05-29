import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
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
            Salut, je suis <span className="highlight">Jacques Mougeot</span>
          </h1>
          <h2>Développeur Web & Designer</h2>
          <p>
            Je crée des expériences numériques exceptionnelles avec une attention 
            particulière au design et à la performance.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              Me contacter
            </button>
            <button className="btn-secondary" onClick={scrollToProjects}>
              Voir mes projets
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
                  <span className="property">name</span>: <span className="string">'Jacques'</span>,
                </div>
                <div className="code-line indent">
                  <span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'TypeScript'</span>],
                </div>
                <div className="code-line indent">
                  <span className="property">passion</span>: <span className="string">'Design'</span>
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
