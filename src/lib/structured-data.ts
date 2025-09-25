import { PROFILE } from "@/data/profile";
import { EXPERIENCES } from "@/data/experiences";
import { PROJECTS } from "@/data/projects";

export function generatePersonStructuredData() {
  const latestJob = EXPERIENCES[0];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    alternateName: PROFILE.initials,
    description: PROFILE.about,
    url: PROFILE.personalWebsiteUrl,
    image: PROFILE.avatarUrl,
    sameAs: PROFILE.contact.social.map((social) => social.url),
    address: {
      "@type": "Place",
      name: PROFILE.location,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: PROFILE.contact.email,
      telephone: PROFILE.contact.tel,
      contactType: "personal",
    },
    jobTitle: latestJob?.title ?? "Student",
    worksFor: latestJob
      ? {
          "@type": "Organization",
          name: latestJob.company,
          url: latestJob.link,
        }
      : undefined,
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Bandung Institute of Technology",
      },
    ],
    hasOccupation: EXPERIENCES.map((job) => ({
      "@type": "Occupation",
      name: job.title,
      occupationLocation: {
        "@type": "Place",
        name: PROFILE.location,
      },
      occupationalCategory: "Architecture / AEC Technology",
    })),
    knowsAbout: PROJECTS.flatMap((p) => p.tags),
  };
}
