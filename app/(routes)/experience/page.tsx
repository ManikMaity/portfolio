import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { siteConfig } from "@/data/metadata";
import { constructMetadata } from "@/lib/generateMetadata";

export const metadata = constructMetadata({
  title: "Experience",
  description: `Explore ${siteConfig.name}'s professional experience, including roles at top tech companies, key projects, and the impact made in the software engineering field.`,
  canonical: siteConfig.url + "/experience",
});

export default function ExperiencePage() {
  return <ExperienceTimeline />;
}
