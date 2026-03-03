"use client";

import { StarHeader } from "@/components/shared/star-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { type Project } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
  // Fallback if project.images is empty
  const images = project.images?.length
    ? project.images
    : [project.images[0] || "/placeholder.webp"];

  return (
    <>
      <StarHeader>
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <Button variant="ghost" className="mb-6 self-start" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <h1 className="mb-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mx-auto max-w-175 text-lg text-muted-foreground">{project.description}</p>
          </motion.div>
        </div>
      </StarHeader>

      <div className="container mx-auto px-4 pt-6 pb-12 md:px-6 md:pt-12 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-12">
          {/* Left column */}
          <div className="space-y-8">
            {/* NEW: Project Image Gallery with Next/Prev */}
            <ProjectImageGallery images={images} title={project.title} />

            {/* Overview */}
            {project.longDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="mb-4 text-2xl font-bold">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">{project.longDescription}</p>
              </motion.div>
            )}

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="mb-4 text-2xl font-bold">Key Achievements</h2>
              <div className="grid gap-3 sm:grid-cols-1">
                {project.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border bg-card p-4 transition-colors hover:bg-accent/50"
                  >
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right sidebar */}
          <aside>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="sticky top-24">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <h3 className="mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {(project.github || project.liveUrl) && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                          Links
                        </h3>
                        <div className="flex flex-col gap-2">
                          {project.github && (
                            <Button variant="outline" className="w-full justify-start" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub Repository
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button variant="default" className="w-full justify-start" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </aside>
        </div>
      </div>
    </>
  );
}

/**
 * Gallery Component with Slide Logic
 */
function ProjectImageGallery({ images, title }: { images: string[]; title: string }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-xl border bg-black shadow-2xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.4 },
            opacity: { duration: 0 },
          }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={images[imageIndex] ?? ""}
            alt={`${title} view ${imageIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Navigation Buttons */}
          <div className="absolute inset-x-4 top-1/2 z-10 flex -translate-y-1/2 justify-between opacity-0 transition-opacity group-hover:opacity-100">
            <Button
              variant="secondary"
              size="icon"
              className="h-10 w-10 rounded-full shadow-lg"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-10 w-10 rounded-full shadow-lg"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
                className={`h-2 rounded-full transition-all ${
                  i === imageIndex ? "w-6 bg-primary" : "w-2 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
