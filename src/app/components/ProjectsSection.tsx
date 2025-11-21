import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/data/code_projects";
import { PROJECTS as DESIGN_PROJECTS } from "@/data/design_projects";

type Project = (typeof PROJECTS)[number];
type DesignProject = (typeof DESIGN_PROJECTS)[number];

export function ProjectsSection({ projects, designProjects }: { projects: readonly Project[], designProjects: readonly DesignProject[] }) {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-2xl font-bold">Design Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {designProjects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
      
      <h2 className="text-2xl font-bold">Tech Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
