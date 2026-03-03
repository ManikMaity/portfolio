"use client";
import type { Course } from "@/data/courses";
import { Card, CardContent } from "../ui/card";
import { Calendar, ExternalLink, GraduationCap } from "lucide-react";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  variant?: "default" | "compact";
}

export default function CourseCard({ course, variant = "default" }: CourseCardProps) {
  const isCompact = variant === "compact";

  return (
    <Card key={course.id} className={cn("w-full overflow-hidden", isCompact && "border")}>
      <CardContent className={cn("relative flex flex-col gap-4 sm:flex-row sm:items-start")}>
        {/* Icon Container */}
        <div
          className={cn(
            "flex flex-shrink-0 items-center justify-center rounded-full bg-primary/10",
            isCompact ? "h-8 w-8" : "h-10 w-10"
          )}
        >
          <GraduationCap className={cn("text-primary", isCompact ? "h-4 w-4" : "h-5 w-5")} />
        </div>

        {/* Content Area */}
        <div className="flex flex-1 flex-col gap-3">
          {/* Title & Button */}
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3
                className={cn(
                  "leading-tight font-bold",
                  isCompact ? "text-sm" : "text-sm md:text-base lg:text-lg"
                )}
              >
                {course.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">{course.provider}</p>
            </div>

            {/* Redirect Button */}
            <Button
              variant="outline"
              size="sm"
              className={cn("h-8 w-fit gap-2 text-xs", !isCompact && "absolute -top-2 right-3")}
              asChild
            >
              <a href={course.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>

          {/* Info hidden in compact variant */}
          {!isCompact && (
            <>
              {/* Date Info */}
              {course.startDate && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground md:text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                    {format(course.startDate, "MMM yyyy")}
                    {course.endDate ? ` – ${format(course.endDate, "MMM yyyy")}` : " – Present"}
                  </span>
                </div>
              )}

              {/* Skills Badges */}
              {course.skills && course.skills.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {course.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-2 py-0 text-[10px] font-bold tracking-wider uppercase md:text-[11px]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
