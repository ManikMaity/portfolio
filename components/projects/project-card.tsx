"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Project } from "@/data/projects";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NextImage } from "../shared/next-safe-image";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Duplicate images to create the infinite loop effect

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-2 pt-0 transition-all hover:border-primary">
      {/* Framer Motion Slider Container */}
      <div className="relative w-full overflow-hidden bg-muted">
        <SnapCarousel images={project.images.length ? project.images : ["/placeholder.webp"]} />
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline">+{project.technologies.length - 4}</Badge>
          )}
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {project.achievements.slice(0, 2).map((achievement, i) => (
            <li key={i} className="flex items-start">
              <ArrowRight className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-primary" />
              <span className="line-clamp-2">{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button asChild variant="default" size="sm">
          <Link href={`/projects/${project.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1" />
        {project.github && (
          <Button asChild variant="ghost" size="icon">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button asChild variant="ghost" size="icon">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

interface SnapCarouselProps {
  images: string[];
  interval?: number; // ms per snap
  className?: string;
}

export function SnapCarousel({ images, interval = 3000, className = "" }: SnapCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [isPaused, images.length, interval]);

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="relative h-full w-full"
        >
          <NextImage
            src={images[currentIndex] ?? ""}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Optional: Indicator dots to make it look like a testimonial slider */}
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === currentIndex ? "w-4 bg-primary" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
