import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { ContactSection } from "../components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aniket Prakash Mehatar" },
      { name: "description", content: "Get in touch with Aniket — email, phone, and a contact form." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell title="Contact" subtitle="Have a project in mind or want to say hi? Let's talk.">
      <ContactSection />
    </PageShell>
  );
}
