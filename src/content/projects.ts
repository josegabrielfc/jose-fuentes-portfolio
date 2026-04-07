import portfolioImg from "../assets/projects/portfolio.webp";
import oclinaImg from "../assets/projects/oclina.webp";
import projectsImg from "../assets/projects/projects.webp";
import dashboardImg from "../assets/projects/dashboard.webp";
import nuviImg from "../assets/projects/nuvi_app.webp";
import wattiImg from "../assets/projects/watti_app.webp";

export interface Project {
  slug: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  tags: string[];
  image: string | ImageMetadata;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  /** Mark as private to hide the code button and show a lock badge instead */
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: { en: "Portfolio", es: "Portafolio Personal" },
    description: {
      en: "Personal portfolio built with Astro and React — fast, accessible, and fully responsive.",
      es: "Portafolio personal construido con Astro y React — rápido, accesible y completamente responsivo.",
    },
    tags: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    image: portfolioImg,
  },
  {
    slug: "projects",
    title: { en: "Projects", es: "Gestión de Proyectos" },
    description: {
      en: "Project management board similar to Jira, tracking requirements from creation through approval.",
      es: "Tablero de gestión de proyectos estilo Jira, desde el levantamiento del requerimiento hasta su aprobación.",
    },
    tags: ["Next.js", "Material UI", "TanStack Query", "Redux"],
    image: projectsImg,
    isPrivate: true,
  },
  {
    slug: "oclina-agenda-web",
    title: {
      en: "Clinical Agenda Management",
      es: "Gestión de Agenda Clínica",
    },
    description: {
      en: "Professional medical platform designed for optical clinics, featuring appointment tracking, patient management and more.",
      es: "Plataforma profesional médica diseñada para clínicas oftalmológicas, con seguimiento de citas, gestión de pacientes y más.",
    },
    tags: ["React", "TypeScript", "Material UI", "Vite"],
    image: oclinaImg,
    isPrivate: true,
  },
  {
    slug: "checkplus",
    title: {
      en: "CheckPlus Platform",
      es: "Plataforma CheckPlus",
    },
    description: {
      en: "Platform for auditing and task management. Features custom questionnaire builders, action plans and document generation.",
      es: "Plataforma empresarial de auditoría y gestión de tareas. Incluye creador de cuestionarios, planes de acción y generación de reportes.",
    },
    tags: ["React", "TypeScript", "Material UI", "Zustand"],
    image: dashboardImg,
    isPrivate: true,
  },
  {
    slug: "watti-app",
    title: {
      en: "Watti App",
      es: "App Watti",
    },
    description: {
      en: "Mobile app for solar panel auditing and installation management, with real-time charts and energy consumption reports.",
      es: "App móvil para auditoría de paneles solares y gestión de instalaciones, con gráficos en tiempo real y reportes de consumo energético.",
    },
    tags: ["Flutter", "Dart"],
    image: wattiImg,
    isPrivate: true,
  },
  {
    slug: "nuvi-app",
    title: {
      en: "Nuvi App",
      es: "App Nuvi",
    },
    description: {
      en: "Mobile app for condominium management, enhancing communication, operations, and security with integrated features",
      es: "App móvil para gestión de condominios, mejorando la comunicación, operación y seguridad con funciones integradas.",
    },
    tags: ["Flutter", "Dart", "Firebase"],
    image: nuviImg,
    isPrivate: true,
  },
];

export const skillCategories = [
  {
    key: "frontend",
    skills: [
      { name: "React", icon: "devicon-react-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Astro", icon: "devicon-astro-plain" },
      { name: "Vue.js", icon: "devicon-vuejs-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
  },
  {
    key: "styling",
    skills: [
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "Sass", icon: "devicon-sass-plain" },
      { name: "Figma", icon: "devicon-figma-plain" },
    ],
  },
  {
    key: "tooling",
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Vite", icon: "devicon-vitejs-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
    ],
  },
  {
    key: "other",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "GraphQL", icon: "devicon-graphql-plain" },
      { name: "Jest", icon: "devicon-jest-plain" },
      { name: "Linux", icon: "devicon-linux-plain" },
    ],
  },
];

export interface ExperienceItem {
  company: string;
  role: { en: string; es: string };
  period: string;
  bullets: { en: string[]; es: string[] };
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Nelumbo Consultores",
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    period: "Jul 2024 – Present",
    bullets: {
      en: [
        "Developed high-performance web modules using React, TypeScript, and Next.js",
        "Implemented responsive interfaces and reusable UI components aligned with design guidelines",
        "Integrated frontend applications with backend services and external APIs",
        "Optimized application performance, bundle size, and cross-browser compatibility",
        "Participated in agile workflows, code reviews, and continuous improvement processes",
      ],
      es: [
        "Desarrollé módulos web de alto rendimiento utilizando React, TypeScript y Next.js",
        "Implementé interfaces responsivas y componentes de UI reutilizables alineados con guías de diseño",
        "Integré aplicaciones frontend con servicios de backend y APIs externas",
        "Optimicé el rendimiento de las aplicaciones, el tamaño del bundle y la compatibilidad entre navegadores",
        "Participé en flujos de trabajo ágiles, revisiones de código y procesos de mejora continua",
      ],
    },
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Web development",
      "Material UI",
      "TanStack Query",
      "Redux",
      "Responsive Design",
    ],
  },
  {
    company: "OPE Colombia",
    role: { en: "Full Stack Developer", es: "Full Stack Developer" },
    period: "Aug 2024 – Jun 2025",
    bullets: {
      en: [
        "Developed microservices using Java with Spring Boot and Spring MVC",
        "Implemented backend and frontend features using JavaScript and PHP",
        "Contributed to full-stack development of web applications and microservice-based systems",
      ],
      es: [
        "Desarrollé microservicios utilizando Java con Spring Boot y Spring MVC",
        "Implementé funcionalidades de backend y frontend utilizando JavaScript y PHP",
        "Contribuí al desarrollo full-stack de aplicaciones web y sistemas basados en microservicios",
      ],
    },
    tags: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "PostgreSQL",
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
    ],
  },
  {
    company: "WATTI Energy",
    role: {
      en: "Frontend Developer (Freelance - remote)",
      es: "Frontend Developer (Freelance - remoto)",
    },
    period: "Aug 2024 – Nov 2024",
    bullets: {
      en: [
        "Developed frontend modules for web and mobile applications",
        "Implemented UI features following project requirements and timelines",
      ],
      es: [
        "Desarrollé módulos frontend para aplicaciones web y móviles",
        "Implementé funcionalidades de UI siguiendo los requerimientos y cronogramas del proyecto",
      ],
    },
    tags: ["Dart", "Flutter", "Mobile development", "Responsive Design"],
  },
  {
    company: "EMSITEL SAS",
    role: { en: "Mobile and Web Developer", es: "Mobile and Web Developer" },
    period: "Mar 2024 – Aug 2024",
    bullets: {
      en: [
        "Developed modules for a mobile application and its corresponding web platform",
        "Implemented backend and frontend functionalities across multiple components",
      ],
      es: [
        "Desarrollé módulos para una aplicación móvil y su correspondiente plataforma web",
        "Implementé funcionalidades de backend y frontend a través de múltiples componentes",
      ],
    },
    tags: [
      "Dart",
      "Flutter",
      "Mobile development",
      "Web development",
      "Responsive Design",
    ],
  },
];
