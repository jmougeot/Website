import React, { useState } from 'react';
import { useLanguage } from '../../App';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Je vous répondrai rapidement.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-subtitle">
          {t.contact.description}
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h4>{t.contact.info.email}</h4>
                <p>jacques.mougeot@centrale-med.fr</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <div className="info-text">
                <h4>{t.contact.info.phone}</h4>
                <p>+33 6 12 34 56 78</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>{t.contact.info.location}</h4>
                <p>France</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <div className="info-text">
                <h4>{t.contact.info.availability}</h4>
                <p>Lun - Ven, 9h - 18h</p>
              </div>
            </div>

            <div className="social-links">
              <h4>{t.contact.social.title}</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/jacquesmougeot/" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                  <span>💼</span>
                  LinkedIn
                </a>
                <a href="https://github.com/jacques-mougeot" className="social-link github" target="_blank" rel="noopener noreferrer">
                  <span>🐱</span>
                  GitHub
                </a>
                <a href="https://twitter.com/jacques_mougeot" className="social-link twitter" target="_blank" rel="noopener noreferrer">
                  <span>🐦</span>
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.contact.form.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.placeholders.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.contact.form.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.placeholders.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t.contact.form.subject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.placeholders.subject}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.contact.form.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t.contact.form.placeholders.message}
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <span>{t.contact.form.send}</span>
                <span className="button-icon">📤</span>
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-content">
            <h3>🚀 Prêt à collaborer ?</h3>
            <p>
              Je suis toujours ouvert aux nouvelles opportunités et aux projets innovants. 
              Que ce soit pour un site web, une application ou une consultation, contactez-moi !
            </p>
            <div className="response-time">
              <span className="response-badge">⚡ Réponse sous 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
