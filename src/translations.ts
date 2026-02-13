export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    documents: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    contactButton: string;
    projectsButton: string;
  };
  about: {
    title: string;
    description: string;
    experience: {
      title: string;
      items: { role: string; place: string; description: string }[];
    };
    education: {
      title: string;
      items: { degree: string; school: string; description: string }[];
    };
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      name: string;
      skills: string[];
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    viewCode: string;
    viewLive: string;
  };
  documents: {
    title: string;
    subtitle: string;
    viewPdf: string;
    items: { title: string; description: string; filename: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    location: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      placeholders: {
        name: string;
        email: string;
        message: string;
      };
    };
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
}

export const translations: Record<'fr' | 'en', Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "Parcours",
      skills: "Competences",
      projects: "Projets",
      documents: "Documents",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Jacques Mougeot",
      title: "Ingenieur & Developpeur",
      description: "Etudiant ingenieur a Centrale Marseille, specialise en data science, finance quantitative et developpement logiciel.",
      contactButton: "Me contacter",
      projectsButton: "Voir mes projets",
    },
    about: {
      title: "Parcours",
      description: "Etudiant ingenieur a l'Ecole Centrale Mediterranee (promotion 2026) avec un fort interet pour la finance quantitative, la data science et le developpement logiciel.",
      experience: {
        title: "Experience",
        items: [
          { role: "Stagiaire - Finance Quantitative", place: "BGC Partners", description: "Developpement d'outils d'analyse de strategies d'options et de signaux de trading." },
          { role: "Stagiaire - Recherche", place: "Universite McMaster", description: "Contribution au systeme de bibliotheque standard du langage Agda." },
        ],
      },
      education: {
        title: "Formation",
        items: [
          { degree: "Ingenieur generaliste", school: "Ecole Centrale Mediterranee", description: "Specialisation data science et informatique. Promotion 2026." },
        ],
      },
    },
    skills: {
      title: "Competences",
      subtitle: "Technologies que je maitrise",
      categories: [
        { name: "Data Science & IA", skills: ["Python", "PyTorch", "TensorFlow", "Pandas", "NumPy", "Matplotlib"] },
        { name: "Finance Quantitative", skills: ["Monte Carlo", "Options Pricing", "SOFR/Euribor", "Bloomberg API", "Signal Analysis"] },
        { name: "Frontend", skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind"] },
        { name: "Backend & Outils", skills: ["Django", "Node.js", "SQL", "PostgreSQL", "Firebase", "Git"] },
      ],
    },
    projects: {
      title: "Projets",
      subtitle: "Selection de projets personnels et academiques",
      viewCode: "Code source",
      viewLive: "Voir le projet",
    },
    documents: {
      title: "Documents",
      subtitle: "Travaux academiques, rapports et presentations",
      viewPdf: "Consulter",
      items: [],
    },
    contact: {
      title: "Contact",
      subtitle: "N'hesitez pas a me contacter pour toute opportunite ou collaboration.",
      email: "jacques.mougeot@centrale-med.fr",
      location: "France",
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        placeholders: {
          name: "Votre nom",
          email: "votre@email.com",
          message: "Votre message...",
        },
      },
    },
    footer: {
      copyright: "Jacques Mougeot. Tous droits reserves.",
      builtWith: "Construit avec React et Tailwind CSS",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "Background",
      skills: "Skills",
      projects: "Projects",
      documents: "Documents",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Jacques Mougeot",
      title: "Engineer & Developer",
      description: "Engineering student at Centrale Marseille, specializing in data science, quantitative finance, and software development. Currently interning at BGC Partners.",
      contactButton: "Contact me",
      projectsButton: "View projects",
    },
    about: {
      title: "Background",
      description: "Engineering student at Ecole Centrale Mediterranee (Class of 2026) with a strong interest in quantitative finance, data science, and software development.",
      experience: {
        title: "Experience",
        items: [
          { role: "Intern - Quantitative Finance", place: "BGC Partners", description: "Developing tools for options strategy analysis and trade signal analysis." },
          { role: "Research Intern", place: "McMaster University", description: "Contributed to the Agda standard library package system." },
        ],
      },
      education: {
        title: "Education",
        items: [
          { degree: "General Engineering", school: "Ecole Centrale Mediterranee", description: "Specialization in data science and computer science. Class of 2026." },
        ],
      },
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I work with",
      categories: [
        { name: "Data Science & AI", skills: ["Python", "PyTorch", "TensorFlow", "Pandas", "NumPy", "Matplotlib"] },
        { name: "Quantitative Finance", skills: ["Monte Carlo", "Options Pricing", "SOFR/Euribor", "Bloomberg API", "Signal Analysis"] },
        { name: "Frontend", skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind"] },
        { name: "Backend & Tools", skills: ["Django", "Node.js", "SQL", "PostgreSQL", "Firebase", "Git"] },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of personal and academic projects",
      viewCode: "Source code",
      viewLive: "View project",
    },
    documents: {
      title: "Documents",
      subtitle: "Academic work, reports, and presentations",
      viewPdf: "View",
      items: [],
    },
    contact: {
      title: "Contact",
      subtitle: "Feel free to reach out for any opportunity or collaboration.",
      email: "jacques.mougeot@centrale-med.fr",
      location: "France",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        placeholders: {
          name: "Your name",
          email: "your@email.com",
          message: "Your message...",
        },
      },
    },
    footer: {
      copyright: "Jacques Mougeot. All rights reserved.",
      builtWith: "Built with React and Tailwind CSS",
    },
  },
};
