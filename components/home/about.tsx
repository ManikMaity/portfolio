"use client";

import { Button } from "@/components/ui/button";
import { ABOUT_CONTENT } from "@/data/about";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { NextImage } from "../shared/next-safe-image";

export function AboutSection() {
  const { description, stats, galleryImages } = ABOUT_CONTENT;

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
              <p className="max-w-150 text-muted-foreground md:text-lg/relaxed">{description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start gap-2 rounded-xl border bg-card/50 p-4 transition-colors hover:bg-card"
                >
                  <stat.icon className="h-5 w-5 text-primary" />
                  <div className="space-y-0.5">
                    <p className="text-sm leading-none font-semibold">{stat.value}</p>
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
                <Link href="/experience">
                  Work History
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>

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
              <VerticalColumn images={galleryImages.group1} speed={20} direction="down" />
              {/* Column 2: Moving Up */}
              <VerticalColumn images={galleryImages.group2} speed={20} direction="up" />
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
  images: { src: string; caption: string }[]; // Updated Type
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
        {[...images, ...images, ...images].map((item, idx) => (
          <div key={idx} className="group/item flex flex-col gap-2">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-border/50 bg-muted shadow-sm">
              <NextImage
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-all duration-700 group-hover/item:scale-105"
                sizes="(max-width: 768px) 40vw, 25vw"
              />
            </div>
            {/* Caption Element */}
            <p className="px-2 text-center text-xs font-medium text-muted-foreground transition-colors group-hover/item:text-primary">
              {item.caption}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
