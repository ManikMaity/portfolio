// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "whiterose-fulltime",
    title: "Full-Stack Developer",
    company: "WhiteRose Lab",
    location: "Kolkata, India",
    startDate: "September 2025",
    endDate: "Present",
    description:
      "Working on production-grade SaaS platforms, focusing on scalable frontend architecture, backend optimization, and system reliability in a small high-ownership team.",
    achievements: [
      "Rebuilt a legacy fundraising admin dashboard from scratch using file-based routing and modular architecture in Tanstack Router, improving maintainability, reducing technical debt, and enhancing overall system performance.",

      "Refactored a tightly coupled employee management SaaS frontend into a modular component-based architecture, reducing feature rollout time by ~30% and improving scalability.",

      "Improved application performance by implementing caching strategies, lazy loading, and bundle splitting, reducing page load time by ~40% and enhancing user experience.",

      "Rebuilt Express.js API endpoints and optimized PostgreSQL queries using CTEs and efficient joins, reducing over-fetching by ~25% and improving response consistency.",
    ],
  },
  {
    id: "whiterose-intern",
    title: "Full-Stack Developer Intern",
    company: "WhiteRose Lab",
    location: "Kolkata, India",
    startDate: "May 2025",
    endDate: "August 2025",
    description:
      "Worked on improving performance, usability, and system stability of a production SaaS waitlist platform.",
    achievements: [
      "Refactored unresponsive React components across admin and user dashboards to ensure full responsiveness across devices, improving accessibility and reducing bounce rate by ~15%.",

      "Built a super-admin control system with role-based access and dynamic waitlist templates, reducing manual configuration effort for administrators.",

      "Integrated Cypress end-to-end tests for authentication and core workflows into the CI/CD pipeline, reducing production regressions by ~25%.",
    ],
  },
];
