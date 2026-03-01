export type SkillCategory =
  | "Languages & Frontend"
  | "Backend & Database"
  | "Cloud/DevOps & Tools"
  | "Concepts & Others";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string;
}

export const skills: Record<SkillCategory, Skill[]> = {
  "Languages & Frontend": [
    { name: "TypeScript", category: "Languages & Frontend", logoKey: "typescript" },
    { name: "JavaScript", category: "Languages & Frontend", logoKey: "javascript" },
    { name: "HTML5", category: "Languages & Frontend", logoKey: "html5" },
    { name: "CSS3", category: "Languages & Frontend", logoKey: "css3" },
    { name: "React.js", category: "Languages & Frontend", logoKey: "react" },
    { name: "Next.js", category: "Languages & Frontend", logoKey: "nextjs" },
    { name: "Tailwind CSS", category: "Languages & Frontend", logoKey: "tailwindcss" },
    { name: "Redux", category: "Languages & Frontend", logoKey: "redux" },
    { name: "Zustand", category: "Languages & Frontend", logoKey: "react" },
    { name: "Tanstack Table", category: "Languages & Frontend", logoKey: "tanstack-table" },
    { name: "Tanstack Router", category: "Concepts & Others", logoKey: "tanstack-router" },
    { name: "React Hook Form", category: "Concepts & Others", logoKey: "react-hook-form" },
    { name: "shadcn/ui", category: "Concepts & Others", logoKey: "tailwindcss" },
    { name: "DaisyUI", category: "Concepts & Others", logoKey: "daisyui" },
  ],
  "Backend & Database": [
    { name: "Node.js", category: "Backend & Database", logoKey: "nodejs" },
    { name: "Bun", category: "Backend & Database", logoKey: "bun" },
    { name: "Express.js", category: "Backend & Database", logoKey: "express" },
    { name: "Hono", category: "Backend & Database", logoKey: "hono" },
    { name: "REST APIs", category: "Backend & Database", logoKey: "swagger" },
    { name: "Socket.io", category: "Backend & Database", logoKey: "socketio" },
    { name: "PostgreSQL", category: "Backend & Database", logoKey: "postgresql" },
    { name: "MongoDB", category: "Backend & Database", logoKey: "mongodb" },
    { name: "Prisma", category: "Backend & Database", logoKey: "prisma" },
    { name: "Mongoose", category: "Backend & Database", logoKey: "mongoose" },
  ],
  "Cloud/DevOps & Tools": [
    { name: "Docker", category: "Cloud/DevOps & Tools", logoKey: "docker" },
    { name: "AWS", category: "Cloud/DevOps & Tools", logoKey: "amazonwebservices" },
    { name: "Firebase", category: "Cloud/DevOps & Tools", logoKey: "firebase" },
    { name: "Git", category: "Cloud/DevOps & Tools", logoKey: "git" },
    { name: "GitHub", category: "Cloud/DevOps & Tools", logoKey: "github" },
    { name: "Postman", category: "Cloud/DevOps & Tools", logoKey: "postman" },
    { name: "Swagger", category: "Cloud/DevOps & Tools", logoKey: "swagger" },
    { name: "Cypress", category: "Cloud/DevOps & Tools", logoKey: "cypress" },
    { name: "Jest", category: "Cloud/DevOps & Tools", logoKey: "jest" },
  ],
  "Concepts & Others": [
    { name: "System Architecture", category: "Concepts & Others", logoKey: "github" },
    { name: "RBAC", category: "Concepts & Others", logoKey: "github" },
    { name: "Module Based Design", category: "Concepts & Others", logoKey: "github" },
    { name: "Figma", category: "Concepts & Others", logoKey: "figma" },
  ],
};
