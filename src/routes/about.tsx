import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { 
  GraduationCap, 
  Code2, 
  Terminal, 
  FileCode, 
  Palette, 
  Coffee, 
  Server, 
  Cpu, 
  Atom, 
  Zap, 
  Network, 
  Smartphone, 
  Layers, 
  Globe, 
  Database, 
  Wrench, 
  GitBranch, 
  Github, 
  Box, 
  Trello, 
  ArrowRightLeft,
  User
} from "lucide-react";
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

const skills = [
  {
    category: "Languages",
    icon: Terminal,
    items: [
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Code2 },
      { name: "Java", icon: Coffee },
      { name: "PHP", icon: Server },
    ]
  },
  {
    category: "Frameworks",
    icon: Cpu,
    items: [
      { name: "React.js", icon: Atom },
      { name: "Next.js", icon: Zap },
      { name: "Node.js", icon: Terminal },
      { name: "Express.js", icon: Network },
      { name: "React Native", icon: Smartphone },
      { name: "Flutter", icon: Layers },
      { name: "Laravel", icon: Globe },
    ]
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
    ]
  },
  {
    category: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Docker", icon: Box },
      { name: "Linux", icon: Cpu },
      { name: "Jira", icon: Trello },
      { name: "REST APIs", icon: ArrowRightLeft },
    ]
  }
];

function About() {
  return (
    <PageShell title="About Me" subtitle="A quick look at my background, education, and the tools I work with.">
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="md:col-span-2 rounded-2xl bg-card border border-border p-8 shadow-soft">
          <div className="flex items-center gap-2 mb-3">
            <User className="w-5 h-5 text-foreground/70" />
            <h2 className="text-xl font-semibold">Professional Summary</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Full Stack Developer with experience in building scalable web and mobile applications. Strong in backend systems,
            performance optimization, and user-centric solutions. I enjoy turning complex problems into clean, intuitive
            products that work beautifully across platforms.
          </p>
        </div>
        <div className="rounded-2xl bg-primary-soft border border-primary/30 p-8">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="w-5 h-5 text-foreground/70" />
            <h2 className="text-xl font-semibold">Education</h2>
          </div>
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
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-card border border-border p-6 hover:shadow-soft transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <cat.icon className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-soft border border-primary/30 text-sm font-medium transition-colors hover:bg-primary/10"
                  >
                    <skill.icon className="w-3.5 h-3.5 text-foreground/70" />
                    {skill.name}
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
