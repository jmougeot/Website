export interface Translations {
  // Header
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    contactButton: string;
    projectsButton: string;
    codeSnippet: {
      name: string;
      skills: string;
      passion: string;
    };
  };
  
  // About Section
  about: {
    title: string;
    description: string;
    stats: {
      experience: string;
      projects: string;
      clients: string;
      awards: string;
    };
    qualities: {
      creative: string;
      reliable: string;
      passionate: string;
    };
  };
  
  // Skills Section
  skills: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      tools: string;
    };
    summary: {
      approach: {
        title: string;
        description: string;
      };
      learning: {
        title: string;
        description: string;
      };
      collaboration: {
        title: string;
        description: string;
      };
      languages: string;
      frameworks: string;
      databases: string;
    };
  };
  
  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    status: {
      completed: string;
      inProgress: string;
      planning: string;
    };      projectData: {
        cashRegister: {
          title: string;
          description: string;
          features: string[];
        };
        ecommerce: {
          title: string;
          description: string;
          features: string[];
        };
        dashboard: {
          title: string;
          description: string;
          features: string[];
        };
        mobileApp: {
          title: string;
          description: string;
          features: string[];
        };
        portfolio: {
          title: string;
          description: string;
          features: string[];
        };
        api: {
          title: string;
          description: string;
          features: string[];
        };
        chatbot: {
          title: string;
          description: string;
          features: string[];
        };
      };
    labels: {
      keyFeatures: string;
      viewProject: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      placeholders: {
        name: string;
        email: string;
        subject: string;
        message: string;
      };
    };
    info: {
      email: string;
      phone: string;
      location: string;
      availability: string;
    };
    social: {
      title: string;
      linkedin: string;
      github: string;
      twitter: string;
    };
    footer: {
      title: string;
      description: string;
      responseTime: string;
    };
  };
  
  // Footer
  footer: {
    brand: {
      name: string;
      description: string;
    };
    navigation: {
      title: string;
      home: string;
      about: string;
      skills: string;
      projects: string;
      contact: string;
    };
    projectsList: {
      title: string;
      portfolio: string;
      ecommerce: string;
      dashboard: string;
      api: string;
    };
    technologies: {
      title: string;
      react: string;
      node: string;
      python: string;
      database: string;
    };
    contactInfo: {
      title: string;
      email: string;
      phone: string;
      location: string;
      website: string;
    };
    social: {
      title: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
    bottom: {
      copyright: string;
      madeWith: string;
      backToTop: string;
    };
    stats: {
      projects: string;
      experience: string;
      responseTime: string;
    };
  };

  // PWA Installation
  pwa: {
    title: string;
    description: string;
    install: string;
    dismiss: string;
  };
}

export const translations: Record<'fr' | 'en', Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact"
    },
    hero: {
      greeting: "Salut, je suis",
      name: "Jacques Mougeot",
      title: "Développeur Web & Designer",
      description: "Je crée des expériences numériques exceptionnelles avec une attention particulière au design et à la performance.",
      contactButton: "Me contacter",
      projectsButton: "Voir mes projets",
      codeSnippet: {
        name: "Jacques",
        skills: "React, TypeScript",
        passion: "Design"
      }
    },
    about: {
      title: "À propos de moi",
      description: "Passionné par le développement web et le design, je combine créativité et expertise technique pour créer des solutions numériques innovantes. Mon approche se concentre sur l'expérience utilisateur et la performance.",
      stats: {
        experience: "Années d'expérience",
        projects: "Projets réalisés",
        clients: "Clients satisfaits",
        awards: "Récompenses"
      },
      qualities: {
        creative: "Créatif",
        reliable: "Fiable",
        passionate: "Passionné"
      }
    },
    skills: {
      title: "Mes compétences",
      subtitle: "Technologies et outils que je maîtrise pour créer des solutions complètes",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Outils"
      },
      summary: {
        approach: {
          title: "🎯 Mon Approche",
          description: "Je privilégie la qualité du code, l'expérience utilisateur et les bonnes pratiques de développement pour créer des solutions durables."
        },
        learning: {
          title: "📚 Apprentissage Continu",
          description: "Toujours en veille technologique pour rester à jour avec les dernières tendances et améliorer constamment mes compétences."
        },
        collaboration: {
          title: "🤝 Collaboration",
          description: "Expérience en travail d'équipe agile, communication efficace et partage de connaissances avec les autres développeurs."
        },
        languages: "Langages",
        frameworks: "Frameworks",
        databases: "Bases de données"
      }
    },
    projects: {
      title: "Mes projets",
      subtitle: "Découvrez quelques-uns de mes projets récents qui démontrent mes compétences et ma passion pour le développement web",
      status: {
        completed: "Terminé",
        inProgress: "En cours",
        planning: "Planifié"
      },
      projectData: {
        cashRegister: {
          title: "Caisse Enregistreuse Restaurant",
          description: "Application mobile cross-platform pour restaurateurs avec fonctionnalités de caisse enregistreuse et gestion du personnel. Projet dirigé avec une équipe de 5 étudiants ingénieurs de l'École Centrale Marseille en partenariat avec Le Caveau du Pressoir.",
          features: ["Gestion des commandes", "Suivi du personnel", "Interface tactile", "Rapports financiers", "Mode hors-ligne"]
        },
        ecommerce: {
          title: "E-Commerce Platform",
          description: "Une plateforme e-commerce moderne avec panier, paiements et gestion des commandes. Interface utilisateur intuitive et expérience d'achat optimisée.",
          features: ["Paiements sécurisés", "Gestion des stocks", "Interface admin", "Responsive design"]
        },
        dashboard: {
          title: "Dashboard Analytics",
          description: "Dashboard interactif pour visualiser des données en temps réel avec graphiques dynamiques et filtres avancés.",
          features: ["Graphiques interactifs", "Temps réel", "Filtres avancés", "Export de données"]
        },
        mobileApp: {
          title: "Application Mobile",
          description: "Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud et notifications push.",
          features: ["Sync cloud", "Notifications", "Mode hors-ligne", "Collaboration"]
        },
        portfolio: {
          title: "Portfolio Designer",
          description: "Site portfolio pour un designer graphique avec galerie interactive et animations fluides.",
          features: ["Galerie interactive", "Animations", "CMS intégré", "SEO optimisé"]
        },
        api: {
          title: "API RESTful",
          description: "API robuste pour une application de gestion avec authentification JWT et documentation Swagger.",
          features: ["Auth sécurisée", "Documentation", "Tests unitaires", "Déploiement auto"]
        },
        chatbot: {
          title: "Chatbot IA",
          description: "Chatbot intelligent avec traitement du langage naturel pour le support client automatisé.",
          features: ["IA conversationnelle", "Multi-langues", "Apprentissage", "Intégration"]
        }
      },
      labels: {
        keyFeatures: "Fonctionnalités clés :",
        viewProject: "Voir le projet"
      },
      cta: {
        title: "Vous avez un projet en tête ?",
        description: "Je suis toujours intéressé par de nouveaux défis et collaborations. Discutons de votre projet !",
        button: "Démarrer un projet"
      }
    },
    contact: {
      title: "Contactez-moi",
      description: "Une idée de projet ? Une question ? N'hésitez pas à me contacter !",
      form: {
        name: "Nom complet",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le message",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès !",
        error: "Erreur lors de l'envoi du message.",
        placeholders: {
          name: "Votre nom",
          email: "votre@email.com",
          subject: "Sujet de votre message",
          message: "Décrivez votre projet ou posez votre question..."
        }
      },
      info: {
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
        availability: "Disponibilité"
      },
      social: {
        title: "Retrouvez-moi sur :",
        linkedin: "LinkedIn",
        github: "GitHub",
        twitter: "Twitter"
      },
      footer: {
        title: "🚀 Prêt à collaborer ?",
        description: "Je suis toujours ouvert aux nouvelles opportunités et aux projets innovants. Que ce soit pour un site web, une application ou une consultation, contactez-moi !",
        responseTime: "⚡ Réponse sous 24h"
      }
    },
    footer: {
      brand: {
        name: "Jacques Mougeot",
        description: "Développeur Full Stack passionné par la création d'expériences numériques exceptionnelles."
      },
      navigation: {
        title: "Navigation",
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact"
      },
      projectsList: {
        title: "Projets",
        portfolio: "Portfolio React",
        ecommerce: "Application E-commerce",
        dashboard: "Dashboard Analytics",
        api: "API REST"
      },
      technologies: {
        title: "Technologies",
        react: "React & TypeScript",
        node: "Node.js & Express",
        python: "Python & Django",
        database: "MongoDB & PostgreSQL"
      },
      contactInfo: {
        title: "Contact",
        email: "📧 jacques.mougeot@email.com",
        phone: "📱 +33 6 12 34 56 78",
        location: "📍 France",
        website: "🌐 jacquesmougeot.fr"
      },
      social: {
        title: "Suivez-moi"
      },
      cta: {
        title: "🚀 Prêt à collaborer ?",
        description: "Transformons vos idées en réalité numérique",
        button: "Démarrer un projet"
      },
      bottom: {
        copyright: "Tous droits réservés.",
        madeWith: "Conçu et développé avec ❤️ en France",
        backToTop: "Haut de page"
      },
      stats: {
        projects: "Projets réalisés",
        experience: "Années d'expérience",
        responseTime: "Temps de réponse"
      }
    },
    
    // PWA Installation
    pwa: {
      title: "Installer l'App",
      description: "Installez cette application sur votre appareil pour une meilleure expérience et un accès rapide.",
      install: "Installer",
      dismiss: "Plus tard"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Jacques Mougeot",
      title: "Web Developer & Designer",
      description: "I create exceptional digital experiences with a focus on design and performance.",
      contactButton: "Contact me",
      projectsButton: "View my projects",
      codeSnippet: {
        name: "Jacques",
        skills: "React, TypeScript",
        passion: "Design"
      }
    },
    about: {
      title: "About me",
      description: "Passionate about web development and design, I combine creativity and technical expertise to create innovative digital solutions. My approach focuses on user experience and performance.",
      stats: {
        experience: "Years of experience",
        projects: "Completed projects",
        clients: "Happy clients",
        awards: "Awards"
      },
      qualities: {
        creative: "Creative",
        reliable: "Reliable",
        passionate: "Passionate"
      }
    },
    skills: {
      title: "My skills",
      subtitle: "Technologies and tools I master to create complete solutions",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools"
      },
      summary: {
        approach: {
          title: "🎯 My Approach",
          description: "I prioritize code quality, user experience, and development best practices to create sustainable solutions."
        },
        learning: {
          title: "📚 Continuous Learning",
          description: "Always staying up-to-date with the latest trends and constantly improving my skills through technology watch."
        },
        collaboration: {
          title: "🤝 Collaboration",
          description: "Experience in agile teamwork, effective communication and knowledge sharing with other developers."
        },
        languages: "Languages",
        frameworks: "Frameworks",
        databases: "Databases"
      }
    },
    projects: {
      title: "My projects",
      subtitle: "Discover some of my recent projects that demonstrate my skills and passion for web development",
      status: {
        completed: "Completed",
        inProgress: "In Progress",
        planning: "Planning"
      },
      projectData: {
        cashRegister: {
          title: "Restaurant Cash Register",
          description: "Cross-platform mobile application for restaurateurs with cash register functionality and staff management features. Project led with a team of 5 engineering students from École Centrale Marseille in partnership with Le Caveau du Pressoir restaurant.",
          features: ["Order management", "Staff tracking", "Touch interface", "Financial reports", "Offline mode"]
        },
        ecommerce: {
          title: "E-Commerce Platform",
          description: "A modern e-commerce platform with shopping cart, payments and order management. Intuitive user interface and optimized shopping experience.",
          features: ["Secure payments", "Inventory management", "Admin interface", "Responsive design"]
        },
        dashboard: {
          title: "Analytics Dashboard",
          description: "Interactive dashboard for real-time data visualization with dynamic charts and advanced filters.",
          features: ["Interactive charts", "Real-time", "Advanced filters", "Data export"]
        },
        mobileApp: {
          title: "Mobile Application",
          description: "Cross-platform mobile application for task management with cloud synchronization and push notifications.",
          features: ["Cloud sync", "Notifications", "Offline mode", "Collaboration"]
        },
        portfolio: {
          title: "Designer Portfolio",
          description: "Portfolio website for a graphic designer with interactive gallery and smooth animations.",
          features: ["Interactive gallery", "Animations", "Integrated CMS", "SEO optimized"]
        },
        api: {
          title: "RESTful API",
          description: "Robust API for a management application with JWT authentication and Swagger documentation.",
          features: ["Secure auth", "Documentation", "Unit tests", "Auto deployment"]
        },
        chatbot: {
          title: "AI Chatbot",
          description: "Intelligent chatbot with natural language processing for automated customer support.",
          features: ["Conversational AI", "Multi-language", "Learning", "Integration"]
        }
      },
      labels: {
        keyFeatures: "Key features:",
        viewProject: "View project"
      },
      cta: {
        title: "Have a project in mind?",
        description: "I'm always interested in new challenges and collaborations. Let's discuss your project!",
        button: "Start a project"
      }
    },
    contact: {
      title: "Contact me",
      description: "Have a project idea? A question? Feel free to reach out!",
      form: {
        name: "Full name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message.",
        placeholders: {
          name: "Your name",
          email: "your@email.com",
          subject: "Subject of your message",
          message: "Describe your project or ask your question..."
        }
      },
      info: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        availability: "Availability"
      },
      social: {
        title: "Find me on:",
        linkedin: "LinkedIn",
        github: "GitHub",
        twitter: "Twitter"
      },
      footer: {
        title: "🚀 Ready to collaborate?",
        description: "I'm always open to new opportunities and innovative projects. Whether it's for a website, an application or a consultation, contact me!",
        responseTime: "⚡ 24h response time"
      }
    },
    footer: {
      brand: {
        name: "Jacques Mougeot",
        description: "Full Stack developer passionate about creating exceptional digital experiences."
      },
      navigation: {
        title: "Navigation",
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
      },
      projectsList: {
        title: "Projects",
        portfolio: "React Portfolio",
        ecommerce: "E-commerce App",
        dashboard: "Analytics Dashboard",
        api: "REST API"
      },
      technologies: {
        title: "Technologies",
        react: "React & TypeScript",
        node: "Node.js & Express",
        python: "Python & Django",
        database: "MongoDB & PostgreSQL"
      },
      contactInfo: {
        title: "Contact",
        email: "📧 jacques.mougeot@email.com",
        phone: "📱 +33 6 12 34 56 78",
        location: "📍 France",
        website: "🌐 jacquesmougeot.fr"
      },
      social: {
        title: "Follow me"
      },
      cta: {
        title: "🚀 Ready to collaborate?",
        description: "Let's turn your ideas into digital reality",
        button: "Start a project"
      },
      bottom: {
        copyright: "All rights reserved.",
        madeWith: "Designed and developed with ❤️ in France",
        backToTop: "Back to top"
      },
      stats: {
        projects: "Completed projects",
        experience: "Years of experience",
        responseTime: "Response time"
      }
    },
    
    // PWA Installation
    pwa: {
      title: "Install App",
      description: "Install this app on your device for a better experience and quick access.",
      install: "Install",
      dismiss: "Not now"
    }
  }
};
