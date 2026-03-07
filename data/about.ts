import { Briefcase, Code, Code2, GraduationCap, Laptop, Smartphone, Terminal } from "lucide-react";
import { ManikProfileImg } from "./assets";

export const HERO_CONTENT = {
  badge: "Open for opportunities",
  greeting: "Hi, I'm",
  name: "Manik",
  skills: ["Full-Stack Developer", "Frontend Developer", "Backend Developer", "Software Engineer"],
  description: `Full-stack developer with production experience in scalable SaaS architecture, API optimization, and performance-focused frontend systems.`,
  buttons: {
    primary: { label: "View Projects", href: "/#projects" },
    secondary: {
      label: "Resume",
      href: "https://drive.google.com/uc?export=download&id=1tTVokPxdTrWG2aN3xS_18p0FPmnakhiZ",
      filename: "Manik_Maity_Resume.pdf",
    },
  },
  image: {
    src: ManikProfileImg,
    alt: "Manik Maity",
  },
};

export const ABOUT_CONTENT = {
  description: `I’m a Software Developer who thrives where logic meets efficiency.
   My journey started in commerce, but my curiosity for how systems scale led me into the world of full-stack engineering. 
   I care deeply about building stable, high-performance software that actually solves human problems.`,
  stats: [
    { label: "Experience", value: "Full-Stack Developer @ Whiteroselab", icon: Code2 },
    { label: "Education", value: "MCA @ SMU", icon: GraduationCap },
  ],

  location: "Kolkata, India",

  aboutThreeBulletPoints: [
    `I’m a Software Engineer who took a bit of a different path. I started out in Commerce, but the moment I built my first static page on a phone during the pandemic, I was hooked. Now, I’m all about building efficient, scalable software that solves real problems.`,
    `My journey into software development was fueled by a desire to create impactful solutions. I’m dedicated to continuous learning and excited about the future of technology.`,
  ],

  galleryImages: {
    group1: [
      { src: "/gallery/city-center.webp", caption: "City Center" },
      { src: "/gallery/college-life.webp", caption: "College Exam Day" },
      { src: "/gallery/durga-puja.webp", caption: "Durga Puja (Kolkata, 2025)" },
      { src: "/gallery/graduation.webp", caption: "Graduation Day" },
    ],
    group2: [
      { src: "/gallery/mall.webp", caption: "Birthday" },
      { src: "/gallery/rail-museum.webp", caption: "Rail Museum Howrah" },
      { src: "/gallery/south-city.webp", caption: "South City Mall" },
      { src: "/gallery/swaraswati-puja.webp", caption: "Swaraswati Puja in College (2024)" },
    ],
  },
};

export const timelineData = [
  {
    year: "2020",
    title: "The Spark of Curiosity",
    description:
      "I joined DITA (Diploma in Information Technology and Applications) in my 11th grade, which was my first formal exposure to programming. It mostly about MS Office, but there is a HTML module that caught my attention. I remember building a simple webpage and being amazed that I could create something on the internet. That was the moment I got hooked on coding.",
    icon: Laptop,
    tags: ["DITA", "HTML", "First Code"],
  },
  {
    year: "2022",
    title: "Coding on a Phone Screen",
    description:
      "During the pandemic while doing my B.Com, I started coding just for fun. I didn't even have a laptop yet, so I used an app called SoloLearn on my phone to figure out HTML, CSS, and the basics of JS. Building my first static pages on a mobile screen was where it all started.",
    icon: Smartphone,
    tags: ["SoloLearn", "Mobile Coding", "B.Com"],
  },
  {
    year: "2023",
    title: "Getting Serious",
    description:
      "I got fascinated by the idea that I could build anything to solve daily problems. I got a laptop and started grinding learning JS in-depth, following Angela Yu, and doing Frontend Mentor challenges. Eventually, I realized I loved this more than commerce, so I joined PW Skills to go deep into the MERN stack and DSA.",
    icon: Code,
    tags: ["MERN Stack", "DSA", "PW Skills"],
  },
  {
    year: "2024",
    title: "Sharpening the Engineering Edge",
    description:
      "Focused on project-based learning and followed everything I could find on YouTube. I joined Harkirat Singh’s 100xDevs cohort, which really opened my eyes to production-grade tech like Next.js, monorepos, and DevOps. I stopped just 'building sites' and started thinking like an engineer.",
    icon: Terminal,
    tags: ["100xDevs", "Next.js", "DevOps"],
  },
  {
    year: "2025",
    title: "The Startup Grind",
    description:
      "Applied everywhere and finally landed an internship at a startup in Kolkata. This was the big shift—learning how real teams work, contributing to production code, and understanding how to build scalable backends. Seeing my work actually help a business grow made me even more hooked on development.",
    icon: Briefcase,
    tags: ["Software Engineer", "Startup Life", "Production Tech"],
  },
  {
    year: "2026",
    title: "Formal Degrees & Daily Growth",
    description:
      "Still pushing every day. I joined the SMU online MCA program to get that formal degree while staying in the industry. My goal is simple: keep improving 0.5% every single day and build software that makes an impact.",
    icon: GraduationCap,
    tags: ["MCA", "SMU", "Continuous Growth"],
  },
];
