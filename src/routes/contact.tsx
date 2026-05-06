import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

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
  const [sent, setSent] = useState(false);
  return (
    <PageShell title="Contact" subtitle="Have a project in mind or want to say hi? Let's talk.">
      <div className="grid md:grid-cols-5 gap-6">
        <aside className="md:col-span-2 rounded-2xl bg-primary-soft border border-primary/30 p-7 space-y-5">
          <a href="mailto:aniketmehatar2004@gmail.com" className="flex items-start gap-3 hover:opacity-80">
            <div className="p-2 rounded-lg bg-card border border-border"><Mail size={18} /></div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="font-medium break-all">aniketmehatar2004@gmail.com</p>
            </div>
          </a>
          <a href="tel:+917058110763" className="flex items-start gap-3 hover:opacity-80">
            <div className="p-2 rounded-lg bg-card border border-border"><Phone size={18} /></div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</p>
              <p className="font-medium">+91 70581 10763</p>
            </div>
          </a>
          <div className="pt-2 flex gap-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"
               className="p-2.5 rounded-full bg-card border border-border hover:bg-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
               className="p-2.5 rounded-full bg-card border border-border hover:bg-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </aside>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 rounded-2xl bg-card border border-border p-7 space-y-4 shadow-soft"
        >
          <div>
            <label className="text-sm font-medium" htmlFor="name">Name</label>
            <input id="name" required className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input id="email" type="email" required className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="message">Message</label>
            <textarea id="message" rows={5} required className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none" />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all">
            <Send size={16} /> Send Message
          </button>
          {sent && <p className="text-sm text-foreground/70">Thanks! I'll get back to you soon.</p>}
        </form>
      </div>
    </PageShell>
  );
}
