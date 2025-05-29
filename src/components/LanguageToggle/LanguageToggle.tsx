import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './LanguageToggle.css';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={() => setLanguage('fr')}
        aria-label="Français"
      >
        🇫🇷 FR
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="English"
      >
        🇬🇧 EN
      </button>
    </div>
  );
};

export default LanguageToggle;
