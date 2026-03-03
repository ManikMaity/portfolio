"use client";

import { JourneySection } from "@/components/about/journey-section";
import { StarHeader } from "@/components/shared/star-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { courses } from "@/data/courses";
import { education } from "@/data/education";
import { skills, type SkillCategory } from "@/data/skills";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, GraduationCap, MapPin } from "lucide-react";

export default function AboutPage() {
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
              About Me
            </h1>
            <p className="mx-auto max-w-175 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know more about my background and skills
            </p>
          </motion.div>
        </div>
      </StarHeader>

      <section className="container mx-auto px-4 pt-6 pb-12 md:px-6 md:pt-12 md:pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left — Who I Am + Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="mb-4 text-2xl font-bold">Who I Am</h2>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <ul className="space-y-6">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="leading-relaxed text-muted-foreground">
                      Software Engineer pursuing an{" "}
                      <span className="font-semibold text-foreground underline decoration-primary/50 decoration-2 underline-offset-4">
                        MS in Computer Science at Northeastern University
                      </span>
                      . I specialize in building full-stack applications and decentralized systems
                      that scale.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="leading-relaxed text-muted-foreground">
                      Currently serving as{" "}
                      <span className="font-semibold text-foreground underline decoration-primary/50 decoration-2 underline-offset-4">
                        Co-Chair for the MIT Bitcoin Expo
                      </span>{" "}
                      and a Teaching Assistant for CS2000. I lead technical coordination for
                      high-stakes, 36-hour hackathons.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="leading-relaxed text-muted-foreground">
                      Proven track record in Web3, having won{" "}
                      <span className="font-semibold text-foreground underline decoration-primary/50 decoration-2 underline-offset-4">
                        over $3,000 in hackathon prizes
                      </span>
                      . My toolkit ranges from TypeScript and React to Solidity and Docker
                      infrastructure.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Education Section */}
            <h2 className="mt-8 mb-4 text-2xl font-bold">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id}>
                  <CardContent className="flex gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.startDate && format(edu.startDate, "MMM yyyy")} –{" "}
                          {edu.endDate && format(edu.endDate, "MMM yyyy")}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                      </div>
                      {edu.gpa && (
                        <Badge variant="outline" className="mt-2 border-primary/20 text-primary">
                          CGPA: {edu.gpa}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Courses Section */}
            <h2 className="mt-8 mb-4 text-2xl font-bold">Courses & Bootcamps</h2>
            <div className="space-y-4">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardContent className="flex gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.provider}</p>
                      {course.startDate && (
                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {course.startDate.toLocaleDateString()}
                            {course.endDate && ` - ${course.endDate.toLocaleDateString()}`}
                          </span>
                        </div>
                      )}
                      {course.skills && course.skills.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {course.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-[10px] font-bold tracking-wider uppercase"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-4 text-2xl font-bold">Skills</h2>
            <div className="space-y-4">
              {Object.keys(skills).map((category) => (
                <Card key={category}>
                  <CardContent className="p-5">
                    <h3 className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills[category as SkillCategory].map((skill) => (
                        <Badge key={skill.name} variant="secondary" className="text-xs">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <JourneySection />
    </>
  );
}
