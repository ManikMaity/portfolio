"use client";

import { motion } from "framer-motion";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookOpen, Calendar } from "lucide-react";
import HomeHeader from "../shared/home-header";

export function CoursesSection() {
  return (
    <section id="courses" className="bg-muted/30 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header - Matches FeaturedProjects style */}
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <HomeHeader
            title="Courses & Certifications"
            subtitle="A selection of relevant courses and certifications I've completed"
          />
        </div>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="group relative flex h-full flex-col overflow-hidden border-t-4 border-t-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader className="p-6 pb-2">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="rounded-lg bg-primary/10 p-2.5 transition-colors group-hover:bg-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-[10px] font-semibold tracking-wider uppercase"
                    >
                      {course.provider}
                    </Badge>
                  </div>
                  <h3 className="text-xl leading-tight font-bold transition-colors group-hover:text-primary">
                    {course.title}
                  </h3>
                </CardHeader>

                <CardContent className="flex grow flex-col space-y-4 p-6 pt-0">
                  {/* Meta Info */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center text-xs font-medium text-muted-foreground">
                      <Calendar className="mr-2 h-3.5 w-3.5 text-primary/70" />
                      {course.startDate?.toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                      {" — "}
                      {course.endDate
                        ? course.endDate.toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Present"}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                    {course.description}
                  </p>

                  {/* Skills - Pushed to bottom of card content */}
                  <div className="mt-auto pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {course.skills?.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="rounded border border-border/50 bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills && course.skills.length > 4 && (
                        <span className="self-center text-[10px] text-muted-foreground/70">
                          +{course.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
