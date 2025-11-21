import { RESUME_DATA } from "@/data/resume-data";
import { EXPERIENCES } from "@/data/experiences";
import { PROJECTS as CODE_PROJECTS } from "@/data/code_projects";
import { PROJECTS as DESIGN_PROJECTS } from "@/data/design_projects";

export function generatePersonStructuredData() {
  const resume = RESUME_DATA;
  const latestJob = (EXPERIENCES && EXPERIENCES.length > 0
    ? EXPERIENCES[0]
    : resume.work?.[0]) ?? null;

  const socialUrls = [
    ...(resume.contact?.social?.map((s) => s.url) ?? []),
    ...(resume.personalWebsiteUrl ? [resume.personalWebsiteUrl] : []),
  ].filter(Boolean);

  const knowsAbout = [
    ...(EXPERIENCES.flatMap((e) => e.tags ?? []) ?? []),
    ...(CODE_PROJECTS.flatMap((p) => p.tags ?? []) ?? []),
    ...(DESIGN_PROJECTS.flatMap((p) => p.tags ?? []) ?? []),
  ]
    .filter(Boolean)
    .map((t) => String(t))
    .filter((v, i, a) => a.indexOf(v) === i);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resume.name,
    alternateName: resume.initials,
    description: typeof resume.about === "string" ? resume.about : undefined,
    url: resume.personalWebsiteUrl ?? undefined,
    image: resume.avatarUrl ?? undefined,
    sameAs: socialUrls.length > 0 ? socialUrls : undefined,
    address: resume.location
      ? {
          "@type": "PostalAddress",
          addressLocality: resume.location,
        }
      : undefined,
    contactPoint: resume.contact
      ? {
          "@type": "ContactPoint",
          email: resume.contact.email,
          telephone: resume.contact.tel,
          contactType: "personal",
        }
      : undefined,
    jobTitle: latestJob?.title ?? undefined,
    worksFor: latestJob
      ? {
          "@type": "Organization",
          name: latestJob.company,
          url: latestJob.link && latestJob.link !== "-" ? latestJob.link : undefined,
        }
      : undefined,
    alumniOf:
      resume.education?.map((ed) => ({
        "@type": "EducationalOrganization",
        name: ed.school,
      })) ?? undefined,
    hasOccupation: (EXPERIENCES || []).map((job) => ({
      "@type": "Occupation",
      name: job.title,
      occupationLocation: resume.location
        ? {
            "@type": "Place",
            name: resume.location,
          }
        : undefined,
      occupationalCategory: (job.tags || []).join(", ") || undefined,
    })),
    knowsAbout: knowsAbout.length > 0 ? knowsAbout : undefined,
  };
}
