import Image from "next/image";

export function ExperienceCard({ exp }: { exp: any }) {
  return (
    <li className="flex items-center justify-between border rounded-lg p-4">
      <div>
        <p className="font-semibold">{exp.role}</p>
        <p className="text-sm text-foreground/70">{exp.org}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-xs text-foreground/60">{exp.date}</p>
        <Image src={exp.logo} alt={exp.org} width={32} height={32} />
      </div>
    </li>
  );
}
