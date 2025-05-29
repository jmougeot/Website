import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
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
        <h2 className="section-title">Me Contacter</h2>
        <p className="section-subtitle">
          Une idée de projet ? Une question ? N'hésitez pas à me contacter !
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h4>Email</h4>
                <p>jacques.mougeot@email.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <div className="info-text">
                <h4>Téléphone</h4>
                <p>+33 6 12 34 56 78</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Localisation</h4>
                <p>France</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <div className="info-text">
                <h4>Disponibilité</h4>
                <p>Lun - Ven, 9h - 18h</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Retrouvez-moi sur :</h4>
              <div className="social-icons">
                <a href="https://linkedin.com/in/jacques-mougeot" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
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
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Sujet de votre message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Décrivez votre projet ou posez votre question..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <span>Envoyer le message</span>
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
