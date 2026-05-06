import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import stayo from "../assets/project-stayo.jpg";
import nextrip from "../assets/project-nextrip.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aniket Prakash Mehatar" },
      { name: "description", content: "Selected projects: Stayo booking platform and NexTrip real-time ride booking." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Stayo – Stay Booking Platform",
    image: stayo,
    desc: "Full-stack booking platform with authentication, Razorpay integration, Cloudinary storage, responsive UI, and an advanced search & review system.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Bootstrap"],
    demo: "https://stayo-tau.vercel.app/listings",
    github: "https://github.com/aniket5065/Stayo.git",
  },
  {
    title: "NexTrip – Real-Time Ride Booking",
    image: nextrip,
    desc: "Real-time ride booking system using Socket.IO and Google Maps API with payment integration and an optimized backend for low-latency updates.",
    tech: ["Node.js", "MongoDB", "Socket.IO", "Google Maps"],
   // demo: "#",
    github: "https://github.com/aniket5065/NexTrip.git",
  },
];

function Projects() {
  return (
    <PageShell title="Selected Work" subtitle="A collection of digital products I've built from the ground up, focusing on performance and user experience.">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[32px] overflow-hidden glass shadow-premium hover:shadow-glow transition-all duration-500"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={640}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <a href={p.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-primary hover:text-primary-foreground transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-black group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed font-medium">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] px-3 py-1.5 rounded-full bg-primary-soft border border-primary/10 font-black uppercase tracking-wider text-primary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-glow hover:shadow-premium hover:-translate-y-1 transition-all">
                    Live Preview <ExternalLink size={16} />
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer"
                   className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                  Source Code <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}
