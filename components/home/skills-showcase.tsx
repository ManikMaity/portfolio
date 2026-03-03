"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TechIcon } from "@/components/tech-icon";
import { skills, type SkillCategory } from "@/data/skills";
import HomeHeader from "../shared/home-header";

export function SkillsShowcase() {
  const categories = Object.keys(skills) as SkillCategory[];
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("Languages & Frontend");

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 text-center md:px-6">
        <HomeHeader
          title="Technical Skills"
          subtitle="My expertise across various technologies and tools"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 md:mt-12"
        >
          <Tabs
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value as SkillCategory)}
            className="w-full"
          >
            <div className="mb-8 flex w-full justify-center">
              <TabsList className="grid h-auto w-full grid-cols-1 gap-2 bg-transparent p-1 sm:flex sm:w-fit sm:flex-wrap sm:justify-center sm:bg-muted">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="w-full px-4 py-2.5 text-sm transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm sm:w-auto"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="w-full">
                {/* Updated Grid: 2 cols on mobile, 4 on tablet, 6 on desktop */}
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                  {skills[category].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="group flex flex-col items-center justify-center space-y-3 rounded-xl border bg-card p-3 transition-all hover:border-primary/50 hover:shadow-md md:p-6"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-primary/10">
                        <TechIcon
                          logoKey={skill.logoKey}
                          name={skill.name}
                          className="h-6 w-6 transition-transform group-hover:scale-110 md:h-8 md:w-8"
                        />
                      </div>
                      <span className="text-sm font-medium tracking-tight">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
