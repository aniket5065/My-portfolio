import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import stayo from "../../assets/project-stayo.jpg";
import nextrip from "../../assets/project-nextrip.jpg";

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
    github: "https://github.com/aniket5065/NexTrip.git",
  },
];

export function ProjectsSection() {
  return (
    <div id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all"
          >
            <div className="aspect-[16/10] overflow-hidden bg-primary-soft">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={640}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary-soft border border-primary/30 font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground hover:shadow-soft transition-all">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm font-semibold hover:bg-primary-soft transition-colors">
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
