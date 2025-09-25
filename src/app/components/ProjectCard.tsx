import Image from "next/image";

export function ProjectCard({ project }: { project: any }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-lg p-4 hover:shadow-md transition"
    >
      <div className="flex items-center gap-3 mb-3">
        <Image src={project.image} alt={project.title} width={32} height={32} />
        <h3 className="font-semibold">{project.title}</h3>
      </div>
      <p className="text-sm text-foreground/70">{project.description}</p>
    </a>
  );
}
