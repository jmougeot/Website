import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorative orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            background: 'var(--gradient-1)',
            opacity: 0.12,
            width: '500px',
            height: '500px',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            background: 'var(--gradient-2)',
            opacity: 0.08,
            width: '400px',
            height: '400px',
            bottom: '-80px',
            left: '-80px',
          }}
        />
      </div>

      <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '160px 24px', textAlign: 'center' }}>
        <div>
          {/* Greeting */}
          <p
            className="font-medium tracking-widest uppercase animate-in"
            style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', marginBottom: '24px' }}
          >
            {t.hero.greeting}
          </p>

          {/* Name */}
          <h1 className="font-extrabold tracking-tight animate-in delay-1" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '24px' }}>
            <span className="gradient-text">{t.hero.name}</span>
          </h1>

          {/* Title */}
          <h2
            className="font-semibold animate-in delay-2"
            style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.25rem, 3vw, 1.875rem)', marginBottom: '32px' }}
          >
            {t.hero.title}
          </h2>

          {/* Description */}
          <p
            className="leading-relaxed animate-in delay-3"
            style={{ color: 'var(--text-tertiary)', fontSize: '18px', maxWidth: '560px', margin: '0 auto 48px auto' }}
          >
            {t.hero.description}
          </p>

          {/* CTA buttons */}
          <div className="animate-in delay-4" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '56px' }}>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-xl"
              style={{ background: 'var(--gradient-1)', boxShadow: '0 4px 20px var(--accent-glow)' }}
            >
              {t.hero.contactButton}
              <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-xl border transition-all duration-300"
              style={{
                color: 'var(--text)',
                borderColor: 'var(--border)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              {t.hero.projectsButton}
            </a>
          </div>

          {/* Social */}
          <div className="animate-in delay-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
            {[
              { href: 'https://github.com/jmougeot', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
              { href: 'https://linkedin.com/in/jacquesmougeot/', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: 'mailto:jacques.mougeot@centrale-med.fr', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg> },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:scale-110"
                style={{ color: 'var(--text-tertiary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
