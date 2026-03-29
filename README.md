# Manik Maity — Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-4.0-38b2ac?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Bun-2.0-fbf0df?style=for-the-badge&logo=bun" alt="Bun">
</p>

<p align="center">
  <a href="https://manikmaity.com" target="_blank">🌐 Live Demo</a>
  ·
  <a href="https://github.com/ManikMaity" target="_blank">🐙 GitHub</a>
  ·
  <a href="https://linkedin.com/in/manikmaity" target="_blank">💼 LinkedIn</a>
</p>

---

A modern, high-performance personal portfolio showcasing my work as a Full-Stack Developer. Built with Next.js 16, TypeScript, and Tailwind CSS 4 — emphasizing clean architecture, modular components, and production-grade code quality.

## ✨ Features

| Category         | Feature                                                           |
| ---------------- | ----------------------------------------------------------------- |
| **Performance**  | Next.js 16 App Router, Turbopack, lazy loading, server components |
| **UI/UX**        | Tailwind CSS 4, shadcn/ui, Radix UI primitives, responsive design |
| **Theming**      | Dark/Light mode with seamless switching via next-themes           |
| **Animation**    | Framer Motion page transitions, GSAP micro-interactions           |
| **3D Graphics**  | React Three Fiber with animated star background                   |
| **SEO**          | Dynamic metadata, sitemap, robots.txt, Open Graph support         |
| **Analytics**    | Vercel Analytics & Speed Insights integration                     |
| **Architecture** | Data-driven design, modular components, centralized config        |

## 🛠 Tech Stack

### Core

| Technology                                    | Purpose                                            |
| --------------------------------------------- | -------------------------------------------------- |
| [Next.js 16](https://nextjs.org/)             | React framework with App Router, Server Components |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development                              |
| [Tailwind CSS 4](https://tailwindcss.com/)    | Utility-first styling                              |
| [Bun](https://bun.sh/)                        | Fast package manager & runtime                     |

### UI & Animation

| Technology                                                  | Purpose                             |
| ----------------------------------------------------------- | ----------------------------------- |
| [shadcn/ui](https://ui.shadcn.com/)                         | Beautiful, accessible UI components |
| [Framer Motion](https://www.framer.com/motion/)             | Declarative animations              |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | 3D rendering                        |
| [Lucide React](https://lucide.dev/)                         | Consistent icon library             |

### Forms & Validation

| Technology                                      | Purpose                  |
| ----------------------------------------------- | ------------------------ |
| [React Hook Form](https://react-hook-form.com/) | Performant form handling |
| [Zod](https://zod.dev/)                         | Schema validation        |
| [Formspree](https://formspree.io/)              | Form backend             |

## 📂 Project Structure

```
manik-maity-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── global-error.tsx    # Error boundary
│   ├── sitemap.ts          # SEO sitemap
│   ├── robots.ts           # SEO robots config
│   └── (routes)/           # Route groups
│       └── projects/
│           └── [slug]/     # Dynamic project pages
│
├── components/             # Modular UI components
│   ├── home/               # Home page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills-showcase.tsx
│   │   ├── featured-projects.tsx
│   │   ├── testimonials.tsx
│   │   └── courses.tsx
│   ├── about/              # About page components
│   ├── projects/           # Project components
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # shadcn/ui components
│   └── shared/             # Reusable utilities
│       ├── section-header.tsx
│       ├── star-header.tsx
│       ├── scroll-progress.tsx
│       └── floating-socials.tsx
│
├── data/                   # Centralized configuration
│   ├── metadata.ts         # Site metadata & SEO
│   ├── projects.ts         # Projects data
│   ├── skills.ts           # Skills by category
│   ├── experience.ts       # Work history
│   ├── education.ts        # Academic background
│   ├── courses.ts          # Certifications
│   ├── testimonials.ts     # Client testimonials
│   ├── navigation.ts       # Nav links
│   └── social.ts           # Social links
│
├── lib/                    # Utilities
│   ├── utils.ts            # Helper functions
│   ├── generateMetadata.ts # Dynamic metadata builder
│   └── icons.tsx           # Icon components
│
└── public/                 # Static assets
    ├── gallery/            # Personal images
    ├── courses/            # Course certificates
    └── og-image.png        # Social sharing image
```

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/ManikMaity/portfolio.git
cd portfolio

# Install dependencies
bun install

# Start development server (Turbopack)
bun run dev
```

> **Note:** This project uses [Bun](https://bun.sh) as the package manager for faster installs and builds.

## 📜 Available Scripts

| Command             | Description                             |
| ------------------- | --------------------------------------- |
| `bun run dev`       | Start development server with Turbopack |
| `bun run build`     | Build for production                    |
| `bun run start`     | Start production server                 |
| `bun run lint`      | Run ESLint for code quality             |
| `bun run typecheck` | Validate TypeScript types               |
| `bun run format`    | Format code with Prettier               |
| `bun run check`     | Run lint, typecheck, and format checks  |

## 🎨 Customizing

The portfolio is **data-driven** — most updates only require editing files in the `data/` directory.

### Update Personal Info

Edit `data/metadata.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Name | Full-Stack Developer",
  description: "Your bio here...",
  url: "https://yourdomain.com",
  githubUrl: "https://github.com/yourusername",
  linkedinUrl: "https://linkedin.com/in/yourusername",
};
```

### Add/Edit Projects

Edit `data/projects.ts`:

```typescript
{
  id: "project-slug",
  title: "Project Name",
  description: "Short description",
  technologies: ["Next.js", "TypeScript"],
  github: "https://github.com/...",
  liveUrl: "https://demo.com",
  featured: true,
}
```

### Other Configurations

| File                 | Purpose                               |
| -------------------- | ------------------------------------- |
| `data/social.ts`     | Social links (GitHub, LinkedIn, etc.) |
| `data/skills.ts`     | Skills organized by category          |
| `data/experience.ts` | Work history & achievements           |
| `data/education.ts`  | Academic background                   |
| `data/navigation.ts` | Navigation links                      |

### Adding Images

Place images in `public/` and reference them in the respective data file.

## 🚀 Deployment

Deploy to Vercel with zero configuration:

```bash
# 1. Push to GitHub
git push origin main

# 2. Go to vercel.com/new
# 3. Import your repository
# 4. Click Deploy
```

Vercel automatically detects Next.js configuration and optimizes the build.

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

<p align="center">
  <strong>Manik Maity</strong><br>
  Full-Stack Developer · Kolkata, India<br>
  <a href="https://manikmaity.com">manikmaity.com</a>
</p>
