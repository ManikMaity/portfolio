"use client";

import { courses } from "@/data/courses";
import { motion } from "framer-motion";
import CourseCard from "../about/course-card";
import HomeHeader from "../shared/home-header";

export function CoursesSection() {
  const featuredCourses = courses.filter((course) => course.is_featured);

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
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex" // <--- makes the motion div a flex container
            >
              <CourseCard variant="compact" course={course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
