"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

import { StarHeader } from "@/components/shared/star-header";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <>
      <StarHeader>
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experience
            </h1>
            <p className="mx-auto max-w-175 text-muted-foreground md:text-xl/relaxed">
              My professional journey in development and research
            </p>
          </motion.div>
        </div>
      </StarHeader>

      <div className="container mx-auto px-4 pb-12 md:px-6 md:pb-24">
        <div className="relative mx-auto mt-12 max-w-5xl">
          {/* THE LINE: Centered on all screens */}
          <div className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-linear-to-b from-primary/50 via-border to-transparent" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`relative mb-16 flex w-full flex-col items-center justify-between md:mb-24 md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* THE LOGO/DOT: Centered on all screens */}
              <div className="absolute top-0 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border bg-background shadow-sm md:top-1/2 md:-translate-y-1/2">
                <Briefcase className="h-4 w-4 text-primary" />
                <div className="absolute h-full w-full animate-ping rounded-full bg-primary/20" />
              </div>

              {/* Spacer for Desktop zigzag */}
              <div className="hidden w-[45%] md:block" />

              {/* THE CARD: 
                  - Mobile: Top margin `mt-14` to clear the centered logo, full width.
                  - Desktop: No top margin, 45% width.
              */}
              <div className="mt-14 w-full md:mt-0 md:w-[45%]">
                <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary/50">
                  <div className="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 rotate-45 bg-primary/5" />

                  <CardHeader className="bg-muted/30 p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold">{experience.title}</CardTitle>
                        <p className="font-medium text-primary/80">{experience.company}</p>
                      </div>
                      <Badge variant="secondary" className="w-fit font-mono whitespace-nowrap">
                        {experience.startDate} — {experience.endDate}
                      </Badge>
                    </div>

                    <div className="mt-3 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1.5 h-3.5 w-3.5" />
                      {experience.location}
                    </div>
                  </CardHeader>

                  <CardContent className="p-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {experience.description}
                    </p>

                    <Separator className="my-5" />

                    <h4 className="mb-3 text-xs font-bold tracking-wider text-foreground/80 uppercase">
                      Impact & Achievements
                    </h4>
                    <ul className="grid gap-3">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <ArrowRight className="h-3 w-3" />
                          </div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
