import React from 'react';
import { useLanguage } from '../../App';
import './About.css';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">{t.about.title}</h2>
            <p className="about-description">
              {t.about.description}
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">{t.about.stats.experience}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">{t.about.stats.projects}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">{t.about.stats.clients}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2x</span>
                <span className="stat-label">{t.about.stats.awards}</span>
              </div>
            </div>

            <div className="about-qualities">
              <div className="quality-item">
                <div className="quality-icon">🧠</div>
                <div className="quality-text">
                  <h4>{t.about.qualities.creative}</h4>
                  <p>Approche méthodique pour résoudre les problèmes complexes</p>
                </div>
              </div>
              <div className="quality-item">
                <div className="quality-icon">👥</div>
                <div className="quality-text">
                  <h4>{t.about.qualities.reliable}</h4>
                  <p>Coordination d'équipes et gestion de projets techniques</p>
                </div>
              </div>
              <div className="quality-item">
                <div className="quality-icon">💡</div>
                <div className="quality-text">
                  <h4>{t.about.qualities.passionate}</h4>
                  <p>Solutions créatives avec les dernières technologies</p>
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
                <div className="floating-item item-1">Python</div>
                <div className="floating-item item-2">PyTorch</div>
                <div className="floating-item item-3">Django</div>
                <div className="floating-item item-4">Data Science</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
