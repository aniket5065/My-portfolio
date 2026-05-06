import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import profile from "../assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aniket Prakash Mehatar — Full Stack Developer" },
      { name: "description", content: "Full Stack Developer building scalable web and mobile applications with modern technologies." },
    ],
  }),
  component: Home,
});

function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-mesh pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

      <section className="relative mx-auto max-w-6xl px-6 py-12 md:py-24 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft border border-primary/20 px-4 py-1.5 text-xs font-bold text-primary tracking-wide uppercase">
              Open to new opportunities
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="mt-8 text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-balance"
          >
            ANIKET <br />
            <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x">
              MEHATAR
            </span>
          </motion.h1>

          <motion.p 
            variants={item}
            className="mt-8 text-xl md:text-2xl font-medium text-foreground/80 max-w-xl leading-relaxed"
          >
            I craft <span className="text-primary font-bold">scalable digital experiences</span> with modern web and mobile technologies.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow hover:shadow-premium hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Explore Work</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card/50 backdrop-blur-md px-8 py-4 text-base font-bold hover:bg-primary-soft transition-all hover:-translate-y-1"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:aniketmehatar2004@gmail.com", label: "Email" },
            ].map((s) => (
              <a 
                key={s.label} 
                href={s.href} 
                target="_blank" 
                rel="noreferrer" 
                aria-label={s.label}
                className="p-3.5 rounded-2xl bg-card/50 backdrop-blur-md border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110 shadow-sm"
              >
                <s.icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative group">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative aspect-square w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-premium">
              <img
                src={profile}
                alt="Aniket Prakash Mehatar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 glass px-6 py-2 rounded-full whitespace-nowrap shadow-xl">
                <p className="text-xs font-black text-primary uppercase tracking-widest text-center">Based in India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { k: "2+", v: "Years Experience", color: "from-blue-500/20" },
            { k: "15+", v: "Project Shipped", color: "from-purple-500/20" },
            { k: "10+", v: "Tech Stack", color: "from-indigo-500/20" },
            { k: "100%", v: "Dedication", color: "from-pink-500/20" },
          ].map((s) => (
            <motion.div 
              key={s.v} 
              variants={item}
              className={`relative group p-8 rounded-[32px] bg-card/50 backdrop-blur-md border border-border hover:border-primary/50 transition-all hover:shadow-premium overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${s.color} to-transparent blur-2xl group-hover:scale-150 transition-transform duration-500`} />
              <div className="relative z-10">
                <div className="text-4xl font-black text-foreground group-hover:text-primary transition-colors">{s.k}</div>
                <div className="mt-2 text-sm font-bold text-muted-foreground uppercase tracking-widest">{s.v}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
