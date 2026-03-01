import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsShowcase } from "@/components/home/skills-showcase";
// import { Testimonials } from "@/components/home/testimonials";
import { CoursesSection } from "@/components/home/courses";
import { AboutSection } from "@/components/home/about";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <SkillsShowcase />
      <CoursesSection />
      {/* <Testimonials /> */}
    </div>
  );
}
