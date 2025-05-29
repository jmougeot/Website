import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PWAInstaller from './components/PWAInstaller/PWAInstaller';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <PWAInstaller />
      </div>
    </LanguageProvider>
  );
}

export default App;
