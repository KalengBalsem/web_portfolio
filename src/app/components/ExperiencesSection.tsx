import { ExperienceCard } from "./ExperienceCard";

export function ExperiencesSection({ experiences }: { experiences: any[] }) {
  return (
    <section id="experiences" className="space-y-8">
      <h2 className="text-2xl font-bold">Experiences</h2>
      <ul className="space-y-4">
        {experiences.map((e) => (
          <ExperienceCard key={`${e.title}-${e.company}`} exp={e} />
        ))}
      </ul>
    </section>
  );
}
