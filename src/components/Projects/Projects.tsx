import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Une plateforme e-commerce moderne avec panier, paiements et gestion des commandes. Interface utilisateur intuitive et expérience d'achat optimisée.",
      image: "🛒",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      features: ["Paiements sécurisés", "Gestion des stocks", "Interface admin", "Responsive design"],
      status: "Terminé",
      link: "#"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interactif pour visualiser des données en temps réel avec graphiques dynamiques et filtres avancés.",
      image: "📊",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      features: ["Graphiques interactifs", "Temps réel", "Filtres avancés", "Export de données"],
      status: "En cours",
      link: "#"
    },
    {
      id: 3,
      title: "Application Mobile",
      description: "Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud et notifications push.",
      image: "📱",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      features: ["Sync cloud", "Notifications", "Mode hors-ligne", "Collaboration"],
      status: "Terminé",
      link: "#"
    },
    {
      id: 4,
      title: "Portfolio Designer",
      description: "Site portfolio pour un designer graphique avec galerie interactive et animations fluides.",
      image: "🎨",
      technologies: ["Next.js", "Framer Motion", "Tailwind", "Sanity"],
      features: ["Galerie interactive", "Animations", "CMS intégré", "SEO optimisé"],
      status: "Terminé",
      link: "#"
    },
    {
      id: 5,
      title: "API RESTful",
      description: "API robuste pour une application de gestion avec authentification JWT et documentation Swagger.",
      image: "🔗",
      technologies: ["Express.js", "JWT", "Swagger", "Docker"],
      features: ["Auth sécurisée", "Documentation", "Tests unitaires", "Déploiement auto"],
      status: "Terminé",
      link: "#"
    },
    {
      id: 6,
      title: "Chatbot IA",
      description: "Chatbot intelligent avec traitement du langage naturel pour le support client automatisé.",
      image: "🤖",
      technologies: ["Python", "OpenAI", "React", "WebSocket"],
      features: ["IA conversationnelle", "Multi-langues", "Apprentissage", "Intégration"],
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
        <h2 className="section-title">Mes Projets</h2>
        <p className="section-subtitle">
          Découvrez quelques-uns de mes projets récents qui démontrent mes compétences 
          et ma passion pour le développement web
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
                  <h4>Fonctionnalités clés :</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-footer">
                <a href={project.link} className="project-link">
                  Voir le projet
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3>Vous avez un projet en tête ?</h3>
            <p>
              Je suis toujours intéressé par de nouveaux défis et collaborations. 
              Discutons de votre projet !
            </p>
            <button className="cta-button" onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}>
              Démarrer un projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
