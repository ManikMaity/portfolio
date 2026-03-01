export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "smu-mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Sikkim Manipal University",
    location: "India",
    startDate: "2025",
    endDate: "2027",
    description:
      "Focused on advanced computer science fundamentals, system design, data structures, and software engineering principles.",
  },
  {
    id: "bes-college",
    degree: "Bachelor of Commerce",
    institution: "The Bhawanipur Education Society College",
    location: "Kolkata, West Bengal, India",
    startDate: "2021",
    endDate: "2024",
    description:
      "Studied marketing and business fundamentals while independently building full-stack web development skills.",
  },
];
