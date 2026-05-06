import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { GraduationCap, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aniket Prakash Mehatar" },
      { name: "description", content: "About Aniket — Full Stack Developer focused on backend systems, performance, and user-centric solutions." },
    ],
  }),
  component: About,
});

const skills = {
  Languages: ["HTML", "CSS", "JavaScript", "Java", "PHP"],
  Frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "React Native", "Flutter", "Laravel"],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Docker", "Linux", "Jira", "REST APIs"],
};

function About() {
  return (
    <PageShell title="About Me" subtitle="A quick look at my background, education, and the tools I work with.">
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="md:col-span-2 rounded-2xl bg-card border border-border p-8 shadow-soft">
          <h2 className="text-xl font-semibold mb-3">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            Full Stack Developer with experience in building scalable web and mobile applications. Strong in backend systems,
            performance optimization, and user-centric solutions. I enjoy turning complex problems into clean, intuitive
            products that work beautifully across platforms.
          </p>
        </div>
        <div className="rounded-2xl bg-primary-soft border border-primary/30 p-8">
          <GraduationCap className="text-foreground/70" />
          <h2 className="mt-3 text-xl font-semibold">Education</h2>
          <p className="mt-2 font-medium">B.Tech CSE</p>
          <p className="text-sm text-muted-foreground">CSMSS College of Engineering</p>
          <p className="text-sm text-muted-foreground">2022 – 2026</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-6">
          <Code2 className="text-foreground/70" />
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-card border border-border p-6 hover:shadow-soft transition-shadow"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{cat}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-primary-soft border border-primary/30 text-sm font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
