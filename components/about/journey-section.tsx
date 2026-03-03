"use client";

import { timelineData } from "@/data/about";
import { motion } from "framer-motion";
import HomeHeader from "../shared/home-header";

export function JourneySection() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <HomeHeader
            title="My Journey"
            subtitle="From writing my first line of code as a self-taught enthusiast to architecting complex systems at the intersection of academia and industry."
          />
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Center Line */}
          <div className="absolute left-4 hidden h-full w-0.5 -translate-x-1/2 bg-border md:left-1/2 md:block" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col items-center justify-between gap-8 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Desktop Year Marker (Center) */}
                <div className="absolute left-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-xl md:flex">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="rounded-2xl border bg-card/50 p-6 shadow-sm transition-colors hover:bg-card">
                    <span className="text-sm font-bold tracking-widest text-primary uppercase">
                      {item.year}
                    </span>
                    <h3 className="mt-1 mb-3 text-xl font-bold">{item.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item?.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Space for layout balance */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
