import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { CertificationsSection } from "../components/sections/CertificationsSection";
import { ContactSection } from "../components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aniket Prakash Mehatar — Full Stack Developer" },
      { name: "description", content: "Full Stack Developer building scalable web and mobile applications with modern technologies." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      {/* These sections are visible on mobile to make it a "single page" experience */}
      {/* On desktop, they are also visible here, but the separate routes still exist */}
      <div className="mx-auto max-w-6xl px-6 w-full space-y-24 pb-24">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </div>
  );
}
