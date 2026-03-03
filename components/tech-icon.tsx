"use client";

import { useState } from "react";
import Image from "next/image";
import { Code } from "lucide-react";

interface TechIconProps {
  logoKey: string;
  name: string;
  className?: string;
}

// Dark icons that need inversion on dark backgrounds
const darkLogoKeys = new Set([
  "nextjs",
  "express",
  "threejs",
  "flask",
  "github",
  "markdown",
  "tailwindcss",
]);

const customIcons: Record<string, string> = {
  amazonwebservices: "https://devicon-website.vercel.app/api/amazonwebservices/original.svg",
  "tanstack-table": "/icons/tanstack.webp",
  "tanstack-router": "/icons/tanstack.webp",
  "react-hook-form": "/icons/react-hook-form.webp",
  "shadcn/ui": "/icons/shadcn-ui.webp",
  daisyui: "/icons/daisy-ui.webp",
  cypress: "/icons/cypress.webp",
  hono: "/icons/hono.webp",
};

export function TechIcon({ logoKey, name, className = "h-5 w-5" }: TechIconProps) {
  const getIconUrl = () => {
    if (customIcons[logoKey]) return customIcons[logoKey];
    if (logoKey === "nextjs")
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
    if (logoKey === "tailwindcss")
      return "https://devicon-website.vercel.app/api/tailwindcss/original-wordmark.svg";
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-original.svg`;
  };

  const getFallbackUrl = () => {
    if (customIcons[logoKey]) return customIcons[logoKey]; // fallback to same custom icon
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-plain.svg`;
  };

  const [src, setSrc] = useState(getIconUrl());
  const [usedFallback, setUsedFallback] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={`${className} flex items-center justify-center rounded bg-primary/10 text-primary`}
      >
        <Code className="h-3 w-3" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={20}
      height={20}
      className={`${className} object-contain ${darkLogoKeys.has(logoKey) ? "dark:invert" : ""}`}
      onError={() => {
        if (!usedFallback) {
          setSrc(getFallbackUrl());
          setUsedFallback(true);
        } else {
          setImageError(true);
        }
      }}
    />
  );
}
