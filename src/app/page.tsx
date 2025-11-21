import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperiencesSection } from "./components/ExperiencesSection";
import { Footer } from "./components/Footer";

// data imports or define here
import { PROFILE } from "@/data/profile";
import { PROJECTS } from "@/data/code_projects";
import { PROJECTS as DESIGN_PROJECTS } from "@/data/design_projects";
import { EXPERIENCES } from "@/data/experiences";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-20 font-mono">
      <Navbar />
      <Header profile={PROFILE} />
      <ProjectsSection projects={PROJECTS} designProjects={DESIGN_PROJECTS} />
      <ExperiencesSection experiences={EXPERIENCES} />
      <Footer name={PROFILE.name} />
    </main>
  );
}
