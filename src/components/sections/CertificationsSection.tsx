import { Award, ExternalLink, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const certs = [
  {
    title: "Full-Stack Web Development",
    org: "Apna College",
    year: "2025",
    link: "https://drive.google.com/file/d/1GffDRSDouY76DnWylHAZK9taVJfX421J/view",
    badge: "Completed",
  },
  {
    title: "Compiler Design",
    org: "NPTEL",
    year: "2025",
    link: "https://drive.google.com/file/d/1szpr60bt-KG4JW9OV0KIsT3rCThG2p5v/view",
    badge: "Completed",
  },
  {
    title: "JAVA Programming",
    org: "NPTEL",
    year: "2025",
    link: "https://drive.google.com/file/d/15Zn5iJ_f3et9ouIZRDiNjolDb2OzASue/view",
    badge: "Completed",
  },
  {
    title: "React Basic",
    org: "HackerRank",
    year: "2025",
    link: "https://drive.google.com/file/d/1B_uYLU8O8hlBt1LzzHooW6XQoAn3Rgvf/view",
    badge: "Completed",
  },
   {
    title: "MongoDB CRUD Operations: Replace and Delete Documents",
    org: "MongoDb",
    year: "2025",
    link: "https://drive.google.com/file/d/1ETAIvbc6f71r6w4y7Xnf4uz0XkUTM3QV/view?usp=sharing",
    badge: "Completed",
  },
     {
    title: "Python Foundation Certificate",
    org: "Infosys Springboard",
    year: "2025",
    link: "https://drive.google.com/file/d/1hwNwpwvoOc0MesMhgDM8_Pw761ZWwotY/view?usp=sharing",
    badge: "Completed",
  },
];

export function CertificationsSection() {
  return (
    <div id="certifications" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, boxShadow: "var(--shadow-soft)" }}
            whileHover={{ y: -5, scale: 1.02, boxShadow: "var(--shadow-elegant)" }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative rounded-2xl bg-card border border-border p-6 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl gradient-primary">
                <Award className="text-foreground/80" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                <BadgeCheck size={12} /> {c.badge}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{c.org}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{c.year}</p>
            <a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-foreground/70"
            >
              View Certificate <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
