import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="skills" style={{ padding: '128px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '20px' }}>
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>{t.skills.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: '32px' }}>
          {t.skills.categories.map((cat, i) => (
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <h3 style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text)' }}>{cat.name}</h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="rounded-lg"
                    style={{
                      padding: '6px 12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      backgroundColor: 'var(--accent-bg)',
                      color: 'var(--accent)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
