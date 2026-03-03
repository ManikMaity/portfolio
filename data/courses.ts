import { SoloLearnHTMLImg, SoloLearnJSImg } from "./assets";

export interface Course {
  id: string;
  title: string;
  provider: string;
  startDate?: Date;
  endDate?: Date;
  skills?: string[];
  url?: string;
  description: string;
  is_featured?: boolean;
}

export const courses: Course[] = [
  {
    id: "100xdevs-webdev-devops",
    title: "Complete Web Development + DevOps Cohort",
    provider: "100xDevs",
    startDate: new Date("2024-03-02"),
    endDate: new Date("2025-08-08"),
    skills: ["React", "Node.js", "Next.js", "TypeScript", "MERN", "Websockets"],
    url: "https://generateinvoice.teachx.in/generatecertificate/certificate/harkirat_db/50235/42729/12",
    description:
      "I was part of Cohort 3. Learned to build full-stack web apps, deploy on cloud, and implement DevOps workflows. Gained hands-on experience with MERN projects.",
    is_featured: true,
  },
  {
    id: "pwskills-fullstack",
    title: "Full-Stack Development Bootcamp",
    provider: "PW Skills",
    startDate: new Date("2023-08-01"),
    endDate: new Date("2025-01-31"),
    url: "https://pwskills.com/learn/certificate/736e3700-07ff-462c-bf89-24b2c6bd",
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
    description:
      "Built full-stack projects with hands-on practice. Learned frontend, backend, databases, authentication, and version control.",
    is_featured: true,
  },

  {
    id: "maths-for-coders",
    title: "Mathematics for Programers",
    provider: "Scaler",
    endDate: new Date("2024-03-23"),
    startDate: new Date("2024-01-15"),
    url: "https://moonshot.scaler.com/s/li/Gozw0coi5I",
    skills: ["Mathematics", "Programming Fundamentals"],
    description:
      "Learned the basics of mathematics and programming, including algebra, functions, and data structures.",
  },

  {
    id: "sololearn-js",
    title: "JavaScript Course",
    provider: "SoloLearn",
    endDate: new Date("2023-05-01"),
    startDate: new Date("2023-04-01"),
    url: SoloLearnJSImg,
    skills: ["JavaScript", "Programming Basics"],
    description:
      "Completed the JavaScript course on SoloLearn, covering fundamentals like variables, functions, loops, and basic DOM manipulation.",
  },

  {
    id: "sololearn-html",
    title: "HTML Course",
    provider: "SoloLearn",
    endDate: new Date("2020-04-01"),
    startDate: new Date("2020-03-01"),
    url: SoloLearnHTMLImg,
    skills: ["HTML", "Web Development Basics"],
    description:
      "Completed the HTML course on SoloLearn, learning about tags, elements, attributes, and how to structure web pages effectively.",
  },
];
