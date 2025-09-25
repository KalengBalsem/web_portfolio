export const PROJECTS = [
  {
    title: "ARCH-IV",
    description:
      "A scalable digital archive system for architecture student works at ITB.",
    image: "/images/logos/archiv.png",
    link: {
      label: "GitHub",
      href: "https://github.com/yourusername/archiv",
    },
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Real Estate Portfolio Optimization",
    description:
      "Machine learning + dynamic programming study for Jabodetabek real estate.",
    image: "/images/logos/realestate.png",
    link: {
      label: "GitHub",
      href: "https://github.com/yourusername/realestate-optimizer",
    },
    tags: ["Python", "ML", "Optimization"],
  },
  {
    title: "Teman Ambiss",
    description:
      "Built a Python-based performance analytics tool as CTO.",
    image: "/images/logos/temanambiss.png",
    link: {
      label: "GitHub",
      href: "https://github.com/yourusername/teman-ambiss",
    },
    tags: ["Python", "Analytics", "EdTech"],
  },
] as const;
