import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <a href="#hero" onClick={() => scrollToSection('hero')}>Accueil</a>
          <a href="#about" onClick={() => scrollToSection('about')}>À propos</a>
          <a href="#skills" onClick={() => scrollToSection('skills')}>Compétences</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projets</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>

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
