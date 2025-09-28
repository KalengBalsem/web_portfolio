import Image from "next/image";

export function ExperienceCard({ exp }: { exp: any }) {
  return (
    <li className="border rounded-lg p-4 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{exp.title}</p>
          <p className="text-sm text-foreground/70">{exp.company}</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xs text-foreground/60">
            {exp.start} – {exp.end}
          </p>
          {exp.logo && (
            <Image
              src={exp.logo}
              alt={exp.company}
              width={32}
              height={32}
              className="rounded"
            />
          )}
        </div>
      </div>

      {/* Description */}
      {exp.description && (
        <p className="text-sm text-foreground/70">{exp.description}</p>
      )}

      {/* Tags */}
      {exp.tags && (
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-foreground/10 text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </li>
  );
}
