import { Briefcase, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Built real-time applications across web and mobile platforms",
  "Worked with Next.js, Flutter, React Native, and Laravel",
  "Developed REST APIs using Node.js and PHP",
  "Used Docker & Linux for deployment workflows",
  "Performance optimization with Firebase and Elasticsearch",
];

export function ExperienceSection() {
  return (
    <div id="experience" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <article className="rounded-2xl bg-card border border-border p-8 shadow-soft">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary text-primary-foreground shrink-0">
            <Briefcase size={22} />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-xl font-semibold">Full Stack Developer Intern</h2>
              <span className="text-sm text-muted-foreground">@ Volobot</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Sept 2025 – Present • Onsite</p>
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {responsibilities.map((r) => (
            <li key={r} className="flex items-start gap-3">
              <CheckCircle2 className="text-primary-foreground/70 shrink-0 mt-0.5" size={18} fill="currentColor" />
              <span className="text-foreground/85">{r}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
