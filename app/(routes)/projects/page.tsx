import { siteConfig } from "@/data/metadata";
import { constructMetadata } from "@/lib/generateMetadata";
import ProjectsMainPage from "./projects";

export const metadata = constructMetadata({
  title: "Projects",
  description: `Discover a curated selection of ${siteConfig.name}'s projects, showcasing expertise in full-stack development, innovative solutions, and impactful contributions to the tech community.`,
  canonical: siteConfig.url + "/projects",
});

export default function Projects() {
  return <ProjectsMainPage />;
}
