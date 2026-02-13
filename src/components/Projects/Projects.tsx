import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Project {
  name: string;
  description: { fr: string; en: string };
  tech: string[];
  github: string;
  live?: string;
}

const projectsData: Project[] = [
  {
    name: "Option Strategy",
    description: {
      fr: "Outil d'analyse et de visualisation de strategies d'options avec profils de risque et graphiques de payoff.",
      en: "Options strategy analysis and visualization tool with risk profiles and payoff charts.",
    },
    tech: ["Python", "Finance", "Options"],
    github: "https://github.com/jmougeot/Option_Strategy",
  },
  {
    name: "Trade Signal Analysis",
    description: {
      fr: "Framework d'analyse de signaux de trading avec backtesting et metriques de performance.",
      en: "Trading signal analysis framework with backtesting and performance metrics.",
    },
    tech: ["Python", "Trading", "Data Analysis"],
    github: "https://github.com/jmougeot/Trade-Signal-Analysis",
  },
  {
    name: "SOFR Event-Driven RV",
    description: {
      fr: "Strategie de valeur relative event-driven sur les marches SOFR.",
      en: "Event-driven relative value strategy on SOFR markets.",
    },
    tech: ["Python", "SOFR", "Quant Finance"],
    github: "https://github.com/jmougeot/SOFR-Event-Driven-RV",
  },
  {
    name: "Euribor Monte Carlo",
    description: {
      fr: "Simulation Monte Carlo pour la valorisation de produits lies a l'Euribor.",
      en: "Monte Carlo simulation for Euribor-linked product valuation.",
    },
    tech: ["Python", "Monte Carlo", "Euribor"],
    github: "https://github.com/jmougeot/Euribor-Monte-Carlo",
  },
  {
    name: "HSMM Dual Scale",
    description: {
      fr: "Implementation de modeles semi-markoviens caches a double echelle pour l'analyse de series temporelles.",
      en: "Hidden semi-Markov model dual-scale implementation for time-series analysis.",
    },
    tech: ["Python", "Machine Learning", "HSMM"],
    github: "https://github.com/jmougeot/HSMM-Dual-Scale",
  },
  {
    name: "Alarm Bloomberg",
    description: {
      fr: "Systeme d'alertes automatisees connecte au terminal Bloomberg.",
      en: "Automated alert system connected to Bloomberg Terminal.",
    },
    tech: ["Python", "Bloomberg API"],
    github: "https://github.com/jmougeot/alarm-bloomberg",
  },
  {
    name: "Alarm Server",
    description: {
      fr: "Backend serveur pour le systeme d'alertes Bloomberg.",
      en: "Backend server for the Bloomberg alert system.",
    },
    tech: ["Python", "Server"],
    github: "https://github.com/jmougeot/alarm-server",
  },
  {
    name: "Le Challenge",
    description: {
      fr: "Application web de gestion de restaurant deployee en production.",
      en: "Restaurant management web application deployed in production.",
    },
    tech: ["React", "Firebase", "Web App"],
    github: "https://github.com/jmougeot/Le_Challenge",
    live: "https://app-restaurant-a6370.web.app",
  },
  {
    name: "Ruby Call",
    description: {
      fr: "Application de communication basee sur Ruby.",
      en: "Ruby-based communication application.",
    },
    tech: ["Ruby"],
    github: "https://github.com/jmougeot/ruby-call",
  },
  {
    name: "Ruby Website",
    description: {
      fr: "Application web developpee en Ruby on Rails.",
      en: "Web application developed with Ruby on Rails.",
    },
    tech: ["Ruby", "Rails", "Web"],
    github: "https://github.com/jmougeot/ruby-website",
  },
  {
    name: "Agda Standard Library",
    description: {
      fr: "Contribution a la bibliotheque standard du langage de preuve Agda (McMaster University).",
      en: "Contribution to the Agda proof language standard library (McMaster University).",
    },
    tech: ["Agda", "Formal Verification"],
    github: "https://github.com/jmougeot/agda-stdlib",
  },
  {
    name: "Projet Innovation",
    description: {
      fr: "Projet d'innovation academique a l'Ecole Centrale.",
      en: "Academic innovation project at Ecole Centrale.",
    },
    tech: ["Innovation", "Academic"],
    github: "https://github.com/jmougeot/Projet-Innovation",
  },
  {
    name: "App Location",
    description: {
      fr: "Application mobile de geolocalisation.",
      en: "Mobile geolocation application.",
    },
    tech: ["Mobile", "Geolocation"],
    github: "https://github.com/jmougeot/app-location",
  },
  {
    name: "Portfolio Website",
    description: {
      fr: "Ce site portfolio personnel, construit avec React et Tailwind CSS.",
      en: "This personal portfolio website, built with React and Tailwind CSS.",
    },
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/jmougeot/jmougeot.github.io",
    live: "https://jacquesmougeot.fr",
  },
];

const Projects: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" style={{ padding: '128px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '20px' }}>
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>{t.projects.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '32px' }}>
          {projectsData.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl border transition-all duration-300"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column' as const,
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-sm)',
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
              {/* Header row: icon + links */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div
                  className="rounded-xl"
                  style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, backgroundColor: 'var(--accent-bg)', color: 'var(--accent)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg transition-all duration-200 hover:scale-110"
                    style={{ color: 'var(--text-tertiary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
                    title={t.projects.viewCode}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg transition-all duration-200 hover:scale-110"
                      style={{ color: 'var(--text-tertiary)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
                      title={t.projects.viewLive}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Title + description */}
              <h3 style={{ fontWeight: 700, fontSize: '14px', marginBottom: '12px', color: 'var(--text)' }}>{project.name}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, flex: 1, marginBottom: '24px', color: 'var(--text-secondary)' }}>
                {language === 'fr' ? project.description.fr : project.description.en}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="rounded-md"
                    style={{ padding: '2px 8px', fontSize: '11px', fontWeight: 500, backgroundColor: 'var(--bg-subtle)', color: 'var(--text-tertiary)' }}
                  >
                    {tech}
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

export default Projects;
