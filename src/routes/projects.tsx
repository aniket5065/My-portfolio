import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { ProjectsSection } from "../components/sections/ProjectsSection";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aniket Prakash Mehatar" },
      { name: "description", content: "Selected projects: Stayo booking platform and NexTrip real-time ride booking." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <PageShell title="Projects" subtitle="A selection of things I've designed, built, and shipped.">
      <ProjectsSection />
    </PageShell>
  );
}
