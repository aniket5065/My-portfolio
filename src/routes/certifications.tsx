import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { CertificationsSection } from "../components/sections/CertificationsSection";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Aniket Prakash Mehatar" },
      { name: "description", content: "Professional certifications and credentials." },
    ],
  }),
  component: Certifications,
});

function Certifications() {
  return (
    <PageShell title="Certifications" subtitle="Credentials that back up the work.">
      <CertificationsSection />
    </PageShell>
  );
}
