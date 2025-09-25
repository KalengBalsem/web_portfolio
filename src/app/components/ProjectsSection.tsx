import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/data/projects";

type Project = (typeof PROJECTS)[number];

export function ProjectsSection({ projects }: { projects: readonly Project[] }) {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
