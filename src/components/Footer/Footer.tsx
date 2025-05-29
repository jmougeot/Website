import React from 'react';
import { useLanguage } from '../../App';
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
                  <li>React & TypeScript</li>
                  <li>Node.js & Express</li>
                  <li>Python & Django</li>
                  <li>MongoDB & PostgreSQL</li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>{t.footer.contactInfo.title}</h4>
                <ul>
                  <li>📧 jacques.mougeot@centrale-med.fr</li>
                  <li>📱 +33 6 12 34 56 78</li>
                  <li>📍 France</li>
                  <li>🌐 jacquesmougeot.fr</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <h4>{t.footer.social.title}</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/jacquesmougeot/" className="social-icon linkedin" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="https://github.com/jacques-mougeot" className="social-icon github" aria-label="GitHub">
                <span>🐱</span>
              </a>
              <a href="https://twitter.com/jacques_mougeot" className="social-icon twitter" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="mailto:jacques.mougeot@centrale-med.fr" className="social-icon email" aria-label="Email">
                <span>📧</span>
              </a>
            </div>
          </div>

          <div className="footer-cta">
            <h4>🚀 Prêt à collaborer ?</h4>
            <p>Transformons vos idées en réalité numérique</p>
            <a href="#contact" className="cta-button">
              Démarrer un projet
              <span>✨</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Jacques Mougeot. Tous droits réservés.</p>
              <p>Conçu et développé avec ❤️ en France</p>
            </div>

            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projets réalisés</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Années d'expérience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">Temps de réponse</span>
              </div>
            </div>

            <button className="back-to-top" onClick={scrollToTop} aria-label="Retour en haut">
              <span>⬆️</span>
              <span>Haut de page</span>
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
