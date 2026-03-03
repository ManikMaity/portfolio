import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectContent } from "./project-content";
import { constructMetadata } from "@/lib/generateMetadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return constructMetadata({
      title: "Project Not Found",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: project.title,
    description: project.description,
    image: project?.images[0],
    canonical: `https://yourdomain.com/projects/${project.id}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
