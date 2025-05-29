import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>{t.footer.brand.name}</h3>
              <p>{t.footer.brand.description}</p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>{t.footer.navigation.title}</h4>
                <ul>
                  <li><a href="#hero">{t.footer.navigation.home}</a></li>
                  <li><a href="#about">{t.footer.navigation.about}</a></li>
                  <li><a href="#skills">{t.footer.navigation.skills}</a></li>
                  <li><a href="#projects">{t.footer.navigation.projects}</a></li>
                  <li><a href="#contact">{t.footer.navigation.contact}</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>{t.footer.projectsList.title}</h4>
                <ul>
                  <li><a href="#projects">{t.footer.projectsList.portfolio}</a></li>
                  <li><a href="#projects">{t.footer.projectsList.ecommerce}</a></li>
                  <li><a href="#projects">{t.footer.projectsList.dashboard}</a></li>
                  <li><a href="#projects">{t.footer.projectsList.api}</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>{t.footer.technologies.title}</h4>
                <ul>
                  <li>{t.footer.technologies.react}</li>
                  <li>{t.footer.technologies.node}</li>
                  <li>{t.footer.technologies.python}</li>
                  <li>{t.footer.technologies.database}</li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>{t.footer.contactInfo.title}</h4>
                <ul>
                  <li>{t.footer.contactInfo.email}</li>
                  <li>{t.footer.contactInfo.phone}</li>
                  <li>{t.footer.contactInfo.location}</li>
                  <li>{t.footer.contactInfo.website}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <h4>{t.footer.social.title}</h4>
            <div className="social-icons">
              <a href="https://linkedin.com/in/jacques-mougeot" className="social-icon linkedin" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="https://github.com/jacques-mougeot" className="social-icon github" aria-label="GitHub">
                <span>🐱</span>
              </a>
              <a href="https://twitter.com/jacques_mougeot" className="social-icon twitter" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="mailto:jacques.mougeot@email.com" className="social-icon email" aria-label="Email">
                <span>📧</span>
              </a>
            </div>
          </div>

          <div className="footer-cta">
            <h4>{t.footer.cta.title}</h4>
            <p>{t.footer.cta.description}</p>
            <a href="#contact" className="cta-button">
              {t.footer.cta.button}
              <span>✨</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} {t.footer.brand.name}. {t.footer.bottom.copyright}</p>
              <p>{t.footer.bottom.madeWith}</p>
            </div>

            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">{t.footer.stats.projects}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">{t.footer.stats.experience}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">{t.footer.stats.responseTime}</span>
              </div>
            </div>

            <button className="back-to-top" onClick={scrollToTop} aria-label={t.footer.bottom.backToTop}>
              <span>⬆️</span>
              <span>{t.footer.bottom.backToTop}</span>
            </button>
          </div>
        </div>

        <div className="footer-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
