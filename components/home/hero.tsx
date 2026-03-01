"use client";

import { StarHeader } from "@/components/shared/star-header";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social";
import { getIconComponent } from "@/lib/icons";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// 1. Move all text to a central configuration object
const HERO_CONTENT = {
  badge: "Available for opportunities",
  greeting: "Hi, I'm",
  name: "Achyut",
  skills: [
    "Full Stack Developer",
    "Web3 Engineer",
    "Frontend Enthusiast",
    "Backend Architect",
    "Problem Solver",
  ],
  description: `Engineering high-performance full-stack applications and decentralized systems. 
                Currently pursuing MS CS at Northeastern & Co-Chair at MIT Bitcoin Expo.`,
  buttons: {
    primary: { label: "View Projects", href: "/#projects" },
    secondary: { label: "Resume", href: "/resume.pdf", filename: "Achyut_Katiyar_Resume.pdf" },
  },
  image: {
    src: "/images/profile.webp",
    alt: "Achyut Katiyar",
  },
};

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % HERO_CONTENT.skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StarHeader>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-12 pb-12 md:py-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column: Text Content */}
            <motion.div
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
              style={{ y: y1 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center rounded-full border bg-background/50 px-3 py-1 text-sm font-medium backdrop-blur-sm"
              >
                <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-primary" />
                {HERO_CONTENT.badge}
              </motion.div>

              <div className="mt-6 space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl"
                >
                  {HERO_CONTENT.greeting} <span className="text-primary">{HERO_CONTENT.name}</span>
                </motion.h1>

                <div className="h-10 sm:h-14">
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={HERO_CONTENT.skills[currentSkillIndex]}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="text-2xl font-semibold text-muted-foreground sm:text-4xl"
                    >
                      {HERO_CONTENT.skills[currentSkillIndex]}
                    </motion.h2>
                  </AnimatePresence>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mx-auto max-w-150 text-lg text-muted-foreground lg:mx-0 xl:text-xl"
                >
                  {HERO_CONTENT.description}
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-8 shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
                >
                  <Link href={HERO_CONTENT.buttons.primary.href}>
                    {HERO_CONTENT.buttons.primary.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 backdrop-blur-sm transition-all hover:bg-primary/5"
                  asChild
                >
                  <a
                    href={HERO_CONTENT.buttons.secondary.href}
                    target="_blank"
                    download={HERO_CONTENT.buttons.secondary.filename}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {HERO_CONTENT.buttons.secondary.label}
                  </a>
                </Button>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 flex gap-4"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={social.name}
                  >
                    {getIconComponent(social.icon)}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: Image */}
            <div className="relative hidden items-center justify-center md:flex lg:justify-end">
              <div className="group relative">
                <div className="absolute -inset-4 rounded-full bg-linear-to-r from-primary/30 to-blue-500/30 opacity-50 blur-2xl transition-opacity group-hover:opacity-80" />
                <div className="relative aspect-square w-64 overflow-hidden rounded-2xl border-2 border-primary/20 bg-background/50 p-2 backdrop-blur-sm sm:w-80 lg:w-112.5">
                  <Image
                    src={HERO_CONTENT.image.src}
                    alt={HERO_CONTENT.image.alt}
                    fill
                    className="rounded-xl object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StarHeader>
  );
}
