import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { ExperienceSection } from "../components/sections/ExperienceSection";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Aniket Prakash Mehatar" },
      { name: "description", content: "Full Stack Developer Intern at Volobot — building real-time apps with Next.js, Flutter, React Native, Laravel." },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <PageShell title="Experience" subtitle="Where I'm currently sharpening my craft.">
      <ExperienceSection />
    </PageShell>
  );
}
