"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, GraduationCap, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { label: "Experience", value: "Full-Stack & Web3", icon: Code2 },
  { label: "Education", value: "MS CS @ NEU", icon: GraduationCap },
  { label: "Awards", value: "$3,000+ Won", icon: Trophy },
];

const galleryImages = [
  "/images/gallery/1.webp",
  "/images/gallery/2.webp",
  "/images/gallery/3.webp",
  "/images/gallery/4.webp",
];

export function AboutSection() {
  return (
    <section className="overflow-hidden py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Engineering with <span className="text-primary">Purpose</span>
              </h2>
              <p className="max-w-150 text-muted-foreground md:text-lg/relaxed">
                I specialize in bridging the gap between complex backend systems and intuitive
                frontend experiences. Focus on clean code, blockchain scalability, and impactful
                user solutions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start gap-2 rounded-xl border bg-card/50 p-4 transition-colors hover:bg-card"
                >
                  <stat.icon className="h-5 w-5 text-primary" />
                  <div className="space-y-0.5">
                    <p className="text-sm leading-none font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group w-fit">
                <Link href="/about">
                  Full Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" className="group w-fit">
                <Link href="/about">
                  Work History
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Side: Vertical Infinite Photo Grid */}
          {/* Increased height and refined blending */}
          <div
            className="relative flex h-125 gap-4 overflow-hidden"
            style={{
              // This creates a smoother fade-out at the top and bottom
              maskImage:
                "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            }}
          >
            <div className="flex w-full gap-4">
              {/* Column 1: Moving Down */}
              <VerticalColumn images={galleryImages} speed={35} direction="down" />
              {/* Column 2: Moving Up */}
              <VerticalColumn images={[...galleryImages].reverse()} speed={40} direction="up" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VerticalColumn({
  images,
  speed,
  direction,
}: {
  images: string[];
  speed: number;
  direction: "up" | "down";
}) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <motion.div
        className="flex flex-col gap-4"
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {/* Triple the array to prevent any flickers on slower speeds or larger screens */}
        {[...images, ...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-border/50 bg-muted shadow-sm"
          >
            <Image
              src={src}
              alt="Gallery showcase"
              fill
              className="object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
              sizes="(max-width: 768px) 40vw, 25vw"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
