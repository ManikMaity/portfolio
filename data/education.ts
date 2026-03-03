export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: Date;
  endDate: Date;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "smu-mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Sikkim Manipal University",
    location: "India",
    startDate: new Date("2025-09-01"),
    endDate: new Date("2027-06-30"),
    description:
      "Focused on advanced computer science fundamentals, system design, data structures, and software engineering principles.",
  },
  {
    id: "bes-college",
    degree: "Bachelor of Commerce",
    institution: "The Bhawanipur Education Society College",
    location: "Kolkata, West Bengal, India",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2024-01-01"),
    description:
      "Studied marketing and business fundamentals while independently building full-stack web development skills.",
  },
];
