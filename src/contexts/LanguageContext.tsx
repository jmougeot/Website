import React, { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import { translations } from '../translations';

type Language = 'fr' | 'en';
type Theme = 'light' | 'dark';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: typeof translations.fr;
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
  const [language, setLanguage] = useState<Language>('fr');
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'dark';
  });
  
  const t = translations[language];

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, theme, setTheme, toggleTheme, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
