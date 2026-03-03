"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "../about/course-card";
import HomeHeader from "../shared/home-header";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CourcesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedCourses = isExpanded ? courses : courses.slice(0, 2);
  const hasMore = courses.length > 2;

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <HomeHeader
            title="Courses & Certifications"
            subtitle="My journey from self-taught basics to production-grade engineering"
          />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {displayedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex"
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="group gap-2 rounded-full border-muted-foreground/20 px-6 hover:border-primary/50"
            >
              {isExpanded ? (
                <>
                  Show Less{" "}
                  <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  View All Courses{" "}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
