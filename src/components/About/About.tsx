import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" style={{ padding: '128px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '20px' }}>
            <span className="gradient-text">{t.about.title}</span>
          </h2>
          <p style={{ fontSize: '16px', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            {t.about.description}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: '48px' }}>
          {/* Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div
                className="rounded-xl"
                style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, background: 'var(--gradient-1)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)' }}>{t.about.experience.title}</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {t.about.experience.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border transition-all duration-300"
                  style={{
                    padding: '28px',
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4 style={{ fontWeight: 600, fontSize: '14px', marginBottom: '8px', color: 'var(--text)' }}>{item.role}</h4>
                  <p style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--accent)' }}>{item.place}</p>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div
                className="rounded-xl"
                style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, background: 'var(--gradient-2)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)' }}>{t.about.education.title}</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {t.about.education.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border transition-all duration-300"
                  style={{
                    padding: '28px',
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4 style={{ fontWeight: 600, fontSize: '14px', marginBottom: '8px', color: 'var(--text)' }}>{item.degree}</h4>
                  <p style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--accent)' }}>{item.school}</p>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
