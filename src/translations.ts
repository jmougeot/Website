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
      awards: string;
    };
    qualities: {
      creative: string;
      creativeDescription?: string;
      reliable: string;
      reliableDescription?: string;
      passionate: string;
      passionateDescription?: string;
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
        portfolioPWA: {
          title: string;
          description: string;
          features: string[];
        };
        photogrammetry: {
          title: string;
          description: string;
          features: string[];
        };
        sportsRental: {
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
      description: "Étudiant ingénieur à Centrale Marseille (promotion 2026), actuellement en stage à l'Université McMaster où je contribue au développement du système de bibliothèque standard d'Agda. Spécialisé en data science, intelligence artificielle et informatique. Je travaille actuellement sur un projet de caisse enregistreuse pour restaurant utilisant React Native et Firebase.",
      stats: {
        awards: "Compétitions escalade",
      },
      qualities: {
        creative: "Analytique",
        creativeDescription: "Stage à l'Université McMaster",
        reliable: "Éducation",
        reliableDescription: "École Centrale Marseille",
        passionate: "Mon projet actuel",
        passionateDescription : "Caisse Enregistreuse Restaurant",
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
        portfolioPWA: {
          title: "Portfolio Web Progressif (PWA)",
          description: "Site web personnel moderne développé avec React et TypeScript, transformé en Progressive Web App. Interface responsive avec animations fluides, optimisée pour les performances et l'accessibilité.",
          features: ["Design responsive", "Animations CSS avancées", "PWA Ready", "TypeScript", "Performance optimisée"]
        },
        photogrammetry: {
          title: "Reconstruction 3D par Photogrammétrie",
          description: "Programme de nuage de points réalisant la reconstruction 3D d'une scène à partir d'une vidéo. Utilise OpenCV pour la vision par ordinateur, détection de points clés, triangulation et RANSAC pour une reconstruction robuste.",
          features: ["Vision par ordinateur", "Détection de points clés", "Triangulation 3D", "Algorithme RANSAC", "Support LIDAR", "Analyse de marché BIM"]
        },
        sportsRental: {
          title: "App-location : Plateforme de Location d'Équipements Sportifs",
          description: "Application web full-stack développée avec Django pour la location d'équipements sportifs. Utilise SQLite pour la base de données et intègre la gestion d'images avec la bibliothèque Pillow.",
          features: ["Interface responsive", "Gestion d'inventaire", "Système de réservation", "Traitement d'images", "Base de données SQLite", "Collaboration front-end"]
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
        email: "📧 jacques.mougeot@centrale-med.fr",
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
      description: "Engineering student at Centrale Marseille (Class of 2026) with a strong focus on data science, artificial intelligence, and computer science. Ranked in the top 1% in mathematics. Experienced in Python, machine learning (PyTorch, TensorFlow), data visualization (Pandas, Matplotlib), and SQL. Contributed to the development of Agda's standard library package system during an internship at McMaster University.",
      stats: {
        awards: "Climbing competitions"
      },
      qualities: {
        creative: "Analytical",
        creativeDescription: "Internship at McMaster University",
        reliable: "Education",
        reliableDescription: "Master of computer engineering at Centrale Marseille",
        passionate: "My current project",
        passionateDescription: "Restaurant Cash Register"
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
        portfolioPWA: {
          title: "Progressive Web Portfolio (PWA)",
          description: "Modern personal website developed with React and TypeScript, transformed into a Progressive Web App. Responsive interface with smooth animations, optimized for performance and accessibility.",
          features: ["Responsive design", "Advanced CSS animations", "PWA Ready", "TypeScript", "Performance optimized"]
        },
        photogrammetry: {
          title: "3D Reconstruction by Photogrammetry",
          description: "Point cloud program performing 3D reconstruction of a scene from video. Uses OpenCV for computer vision, keypoint detection, triangulation and RANSAC for robust reconstruction.",
          features: ["Computer vision", "Keypoint detection", "3D triangulation", "RANSAC algorithm", "LIDAR support", "BIM market analysis"]
        },
        sportsRental: {
          title: "App-location: Sports Equipment Rental Platform",
          description: "Full-stack web application developed with Django for sports equipment rental. Uses SQLite database and integrates image management with Pillow library.",
          features: ["Responsive interface", "Inventory management", "Booking system", "Image processing", "SQLite database", "Front-end collaboration"]
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
        email: "📧 jacques.mougeot@centrale-med.fr",
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
