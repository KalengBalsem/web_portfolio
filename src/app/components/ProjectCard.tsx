import Image from "next/image";

export function ProjectCard({ project }: { project: any }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col">
      {/* Top image */}
      <div className="relative w-full h-52">
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

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex gap-3 flex-wrap">
            {project.links.map((link: any) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary underline hover:text-primary/80"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
