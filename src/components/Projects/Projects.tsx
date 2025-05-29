import React from 'react';
import './Projects.css';
import { translations } from '../../translations';

const Projects: React.FC = () => {
  // Utilisation des traductions françaises (peut être étendu pour le multi-langue plus tard)
  const t = translations.fr.projects;

  const projectsData = [
    {
      id: 1,
      title: t.projectData.cashRegister.title,
      description: t.projectData.cashRegister.description,
      image: "🍽️",
      technologies: ["React Native", "TypeScript", "Firebase", "Node.js"],
      features: t.projectData.cashRegister.features,
      status: "Terminé",
      link: "#"
    },
    {
      id: 2,
      title: t.projectData.ecommerce.title,
      description: t.projectData.ecommerce.description,
      image: "🛒",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      features: t.projectData.ecommerce.features,
      status: "Terminé",
      link: "#"
    },
    {
      id: 3,
      title: t.projectData.dashboard.title,
      description: t.projectData.dashboard.description,
      image: "📊",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      features: t.projectData.dashboard.features,
      status: "En cours",
      link: "#"
    },
    {
      id: 4,
      title: t.projectData.mobileApp.title,
      description: t.projectData.mobileApp.description,
      image: "📱",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      features: t.projectData.mobileApp.features,
      status: "Terminé",
      link: "#"
    },
    {
      id: 5,
      title: t.projectData.portfolio.title,
      description: t.projectData.portfolio.description,
      image: "🎨",
      technologies: ["Next.js", "Framer Motion", "Tailwind", "Sanity"],
      features: t.projectData.portfolio.features,
      status: "Terminé",
      link: "#"
    },
    {
      id: 6,
      title: t.projectData.api.title,
      description: t.projectData.api.description,
      image: "🔗",
      technologies: ["Express.js", "JWT", "Swagger", "Docker"],
      features: t.projectData.api.features,
      status: "Terminé",
      link: "#"
    },
    {
      id: 7,
      title: t.projectData.chatbot.title,
      description: t.projectData.chatbot.description,
      image: "🤖",
      technologies: ["Python", "OpenAI", "React", "WebSocket"],
      features: t.projectData.chatbot.features,
      status: "En développement",
      link: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Terminé": return "#10b981";
      case "En cours": return "#f59e0b";
      case "En développement": return "#3b82f6";
      default: return "#6b7280";
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">
          {t.subtitle}
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon">{project.image}</div>
                <div className="project-status" style={{ backgroundColor: getStatusColor(project.status) }}>
                  {project.status}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>{t.labels.keyFeatures}</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-footer">
                <a href={project.link} className="project-link">
                  {t.labels.viewProject}
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3>{t.cta.title}</h3>
            <p>
              {t.cta.description}
            </p>
            <button className="cta-button" onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t.cta.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
