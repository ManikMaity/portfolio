export interface Course {
  id: string;
  title: string;
  provider: string;
  startDate?: Date;
  endDate?: Date;
  skills?: string[];
  course_images: string[];
  description: string;
}

export const courses: Course[] = [
  {
    id: "100xdevs-webdev-devops",
    title: "Complete Web Development + DevOps Cohort",
    provider: "100xDevs",
    startDate: new Date("2024-08-02"),
    skills: ["React", "Node.js", "Next.js", "TypeScript", "MERN", "Websockets"],
    course_images: ["https://example.com/images/100xdevs-hero.jpg"],
    description:
      "I was part of Cohort 3. Learned to build full-stack web apps, deploy on cloud, and implement DevOps workflows. Gained hands-on experience with MERN projects.",
  },
  {
    id: "pwskills-fullstack",
    title: "Full-Stack Development Bootcamp",
    provider: "PW Skills",
    startDate: new Date("2023-08-01"),
    endDate: new Date("2025-01-31"),
    skills: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "MongoDB",
      "Git",
    ],
    course_images: ["https://example.com/images/pwskills-bootcamp.jpg"],
    description:
      "Built full-stack projects with hands-on practice. Learned frontend, backend, databases, authentication, and version control.",
  },
];
