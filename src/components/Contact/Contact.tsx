import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${t.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-subtle)',
    borderColor: 'var(--border)',
    color: 'var(--text)',
  };

  return (
    <section id="contact" style={{ padding: '128px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '20px' }}>
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>{t.contact.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '40px' }}>
          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              className="rounded-2xl border"
              style={{ padding: '24px', backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  className="rounded-xl"
                  style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, background: 'var(--gradient-1)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
                  </svg>
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: '12px', fontWeight: 500, marginBottom: '2px', color: 'var(--text-tertiary)' }}>Email</p>
                  <a
                    href={`mailto:${t.contact.email}`}
                    className="truncate block transition-colors"
                    style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', textDecoration: 'none' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text)'}
                  >
                    {t.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl border"
              style={{ padding: '24px', backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  className="rounded-xl"
                  style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, background: 'var(--gradient-2)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 500, marginBottom: '2px', color: 'var(--text-tertiary)' }}>Location</p>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{t.contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border"
            style={{ padding: '32px', backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '20px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.contact.form.placeholders.name}
                  required
                  className="w-full px-4 py-3 text-sm rounded-xl border outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-glow)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t.contact.form.placeholders.email}
                  required
                  className="w-full px-4 py-3 text-sm rounded-xl border outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-glow)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                {t.contact.form.message}
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.contact.form.placeholders.message}
                required
                rows={5}
                className="w-full px-4 py-3 text-sm rounded-xl border outline-none transition-all duration-200 resize-none"
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-glow)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <button
              type="submit"
              className="rounded-xl transition-all duration-300 cursor-pointer"
              style={{ width: '100%', padding: '14px', fontSize: '14px', fontWeight: 700, color: 'white', background: 'var(--gradient-1)', boxShadow: '0 4px 20px var(--accent-glow)', border: 'none' }}
            >
              {t.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
