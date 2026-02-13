import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Documents: React.FC = () => {
  const { t, language } = useLanguage();
  const documents: { title: string; description: string; filename: string }[] = t.documents.items;

  return (
    <section id="documents" style={{ padding: '128px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '20px' }}>
            <span className="gradient-text">{t.documents.title}</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>{t.documents.subtitle}</p>
        </div>

        {documents.length === 0 ? (
          <div
            className="rounded-2xl"
            style={{ padding: '56px', border: '2px dashed var(--border)', textAlign: 'center', backgroundColor: 'var(--bg-card)' }}
          >
            <div
              className="rounded-2xl"
              style={{ width: '64px', height: '64px', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--accent-bg)', color: 'var(--accent)' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-tertiary)' }}>
              {language === 'fr' ? 'Aucun document pour le moment' : 'No documents yet'}
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '32px' }}>
            {documents.map((doc, i) => (
              <a
                key={i}
                href={`/documents/${doc.filename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border transition-all duration-300 block"
                style={{
                  padding: '24px',
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="rounded-xl"
                  style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', backgroundColor: 'var(--accent-bg)', color: 'var(--accent)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px', color: 'var(--text)' }}>{doc.title}</h3>
                <p style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--text-secondary)' }}>{doc.description}</p>
                <span style={{ fontSize: '12px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent)' }}>
                  {t.documents.viewPdf}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Documents;
