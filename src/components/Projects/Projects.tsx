import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './Projects.css';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const projectsData = [
    {
      id: 1,
      key: "ecommerce" as keyof typeof t.projects.projectData,
      image: "🛒",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      status: "completed",
      link: "#"
    },
    {
      id: 2,
      key: "dashboard" as keyof typeof t.projects.projectData,
      image: "📊",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      status: "inProgress",
      link: "#"
    },
    {
      id: 3,
      key: "mobileApp" as keyof typeof t.projects.projectData,
      image: "📱",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      status: "completed",
      link: "#"
    },
    {
      id: 4,
      key: "portfolio" as keyof typeof t.projects.projectData,
      image: "🎨",
      technologies: ["Next.js", "Framer Motion", "Tailwind", "Sanity"],
      status: "completed",
      link: "#"
    },
    {
      id: 5,
      key: "api" as keyof typeof t.projects.projectData,
      image: "🔗",
      technologies: ["Express.js", "JWT", "Swagger", "Docker"],
      status: "completed",
      link: "#"
    },
    {
      id: 6,
      key: "chatbot" as keyof typeof t.projects.projectData,
      image: "🤖",
      technologies: ["Python", "OpenAI", "React", "WebSocket"],
      status: "planning",
      link: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "#10b981";
      case "inProgress": return "#f59e0b";
      case "planning": return "#3b82f6";
      default: return "#6b7280";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return t.projects.status.completed;
      case "inProgress": return t.projects.status.inProgress;
      case "planning": return t.projects.status.planning;
      default: return status;
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
                  {getStatusText(project.status)}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{t.projects.projectData[project.key].title}</h3>
                <p className="project-description">{t.projects.projectData[project.key].description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>{t.projects.labels.keyFeatures}</h4>
                  <ul>
                    {t.projects.projectData[project.key].features.map((feature: string, index: number) => (
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
