export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/ManikMaity",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/manikmaity",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:manikmaity010@gmail.com",
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+919330685099",
    icon: "phone",
  },
];
