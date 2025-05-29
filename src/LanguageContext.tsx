import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Translations } from './translations';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Detect browser language or use French as default
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) return 'en';
    return 'fr'; // Default to French
  };

  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, then browser language
    const savedLang = localStorage.getItem('preferred-language') as Language;
    return savedLang || getBrowserLanguage();
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('preferred-language', language);
    // Update document lang attribute for SEO
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
