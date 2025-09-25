import Image from "next/image";

export function ProjectCard({ project }: { project: any }) {
  return (
    <a
      href={project.link?.href}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col"
    >
      {/* Top image */}
      <div className="relative w-full h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Card body */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="font-semibold text-lg">{project.title}</h3>

        {/* Description */}
        <p className="text-sm text-foreground/70 flex-1">
          {project.description}
        </p>

        {/* Link */}
        {project.link && (
          <span className="text-sm font-medium text-primary underline">
            {project.link.label}
          </span>
        )}
      </div>
    </a>
  );
}
