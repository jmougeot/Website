import React from 'react';
import { useLanguage } from '../../App';
import './Projects.css';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projectsData = [
    {
      id: 1,
      title: t.projects.projectData.cashRegister.title,
      description: t.projects.projectData.cashRegister.description,
      image: "🍽️",
      technologies: ["React Native", "TypeScript", "Firebase", "Node.js"],
      features: t.projects.projectData.cashRegister.features,
      status: "Terminé",
      link: "https://github.com/jmougeot/Projet_innovation"
    },
    {
      id: 2,
      title: t.projects.projectData.portfolioPWA.title,
      description: t.projects.projectData.portfolioPWA.description,
      image: "💻",
      technologies: ["React", "TypeScript", "CSS3", "PWA"],
      features: t.projects.projectData.portfolioPWA.features,
      status: "Terminé",
      link: "https://jacquesmougeot.fr"
    },
    {
      id: 3,
      title: t.projects.projectData.photogrammetry.title,
      description: t.projects.projectData.photogrammetry.description,
      image: "📐",
      technologies: ["Python", "OpenCV", "NumPy", "Matplotlib", "RANSAC"],
      features: t.projects.projectData.photogrammetry.features,
      status: "Terminé",
      link: "https://github.com/jmougeot/MAP"
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
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-subtitle">
          {t.projects.subtitle}
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
                  <h4>{t.projects.labels.keyFeatures}</h4>
                  <ul>
                    {project.features.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-footer">
                <a href={project.link} className="project-link">
                  {t.projects.labels.viewProject}
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3>{t.projects.cta.title}</h3>
            <p>
              {t.projects.cta.description}
            </p>
            <button className="cta-button" onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t.projects.cta.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
