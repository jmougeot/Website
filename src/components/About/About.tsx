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
                <span className="stat-number">50+</span>
                <span className="stat-label">{t.about.stats.projects}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">{t.about.stats.clients}</span>
              </div>
            </div>

            <div className="about-qualities">
              <div className="quality-item">
                <div className="quality-icon">🎨</div>
                <div className="quality-text">
                  <h4>{t.about.qualities.creative}</h4>
                  <p>Interface utilisateur moderne et intuitive</p>
                </div>
              </div>
              <div className="quality-item">
                <div className="quality-icon">⚡</div>
                <div className="quality-text">
                  <h4>{t.about.qualities.reliable}</h4>
                  <p>Code optimisé pour une expérience fluide</p>
                </div>
              </div>
              <div className="quality-item">
                <div className="quality-icon">📱</div>
                <div className="quality-text">
                  <h4>{t.about.qualities.passionate}</h4>
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
