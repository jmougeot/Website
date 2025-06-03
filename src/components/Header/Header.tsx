import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, theme, toggleTheme, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <span>Jacques Mougeot</span>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <a href="#hero" onClick={() => scrollToSection('hero')}>{t.nav.home}</a>
          <a href="#about" onClick={() => scrollToSection('about')}>{t.nav.about}</a>
          <a href="#skills" onClick={() => scrollToSection('skills')}>{t.nav.skills}</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>{t.nav.projects}</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>{t.nav.contact}</a>
        </nav>

        <div className="header-actions">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <div className="language-switcher">
            <button 
              className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
              onClick={() => setLanguage('fr')}
            >
              FR
            </button>
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
