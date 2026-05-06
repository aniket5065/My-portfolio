import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { AboutSection } from "../components/sections/AboutSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aniket Prakash Mehatar" },
      { name: "description", content: "About Aniket — Full Stack Developer focused on backend systems, performance, and user-centric solutions." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell title="About Me" subtitle="A quick look at my background, education, and the tools I work with.">
      <AboutSection />
    </PageShell>
  );
}
