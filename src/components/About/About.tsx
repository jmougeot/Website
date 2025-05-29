import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">À propos de moi</h2>
            <p className="about-description">
              Passionné par le développement web et le design, je combine créativité 
              et expertise technique pour créer des solutions numériques innovantes. 
              Avec plusieurs années d'expérience, je me spécialise dans le développement 
              d'applications web modernes et performantes.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Années d'expérience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projets réalisés</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction client</span>
              </div>
            </div>

            <div className="about-qualities">
              <div className="quality-item">
                <div className="quality-icon">🎨</div>
                <div className="quality-text">
                  <h4>Design Créatif</h4>
                  <p>Interface utilisateur moderne et intuitive</p>
                </div>
              </div>
              <div className="quality-item">
                <div className="quality-icon">⚡</div>
                <div className="quality-text">
                  <h4>Performance</h4>
                  <p>Code optimisé pour une expérience fluide</p>
                </div>
              </div>
              <div className="quality-item">
                <div className="quality-icon">📱</div>
                <div className="quality-text">
                  <h4>Responsive</h4>
                  <p>Adaptation parfaite sur tous les appareils</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image">
              <div className="image-placeholder">
                <div className="avatar">JM</div>
              </div>
              <div className="floating-elements">
                <div className="floating-item item-1">React</div>
                <div className="floating-item item-2">TypeScript</div>
                <div className="floating-item item-3">CSS</div>
                <div className="floating-item item-4">Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
