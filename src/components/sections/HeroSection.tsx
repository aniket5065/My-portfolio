import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import profile from "../../assets/profile.jpg";

export function HeroSection() {
  return (
    <div id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft border border-primary/30 px-3 py-1 text-xs font-medium text-foreground/80">
            <Sparkles size={14} className="text-primary-foreground/80" />
            Available for opportunities
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.05]">
            ANIKET PRAKASH<br />
            <span className="bg-primary px-2 rounded-lg">MEHATAR</span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-foreground/80">Full Stack Developer</p>
          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-lg">
            Building scalable web and mobile applications with modern technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-primary-soft transition-colors"
            >
              Contact Me
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"
              className="p-2.5 rounded-full bg-card border border-border hover:bg-primary hover:border-primary transition-all hover:scale-110">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-card border border-border hover:bg-primary hover:border-primary transition-all hover:scale-110">
              <Linkedin size={18} />
            </a>
            <a href="mailto:aniketmehatar2004@gmail.com" aria-label="Email"
              className="p-2.5 rounded-full bg-card border border-border hover:bg-primary hover:border-primary transition-all hover:scale-110">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full gradient-primary blur-2xl opacity-60" />
            <div className="relative rounded-full p-1.5 bg-primary shadow-elegant">
              <img
                src={profile}
                alt="Aniket Prakash Mehatar portrait"
                width={384}
                height={384}
                className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover bg-card relative "
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "2+", v: "Years Coding" },
            { k: "10+", v: "Projects Built" },
            { k: "6+", v: "Technologies" },
            { k: "1", v: "Internship" },
          ].map((s) => (
            <motion.div 
              key={s.v} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1, boxShadow: "var(--shadow-soft)" }}
              whileHover={{ y: -5, scale: 1.05, boxShadow: "var(--shadow-elegant)" }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-card border border-border p-6 text-center transition-all duration-300"
            >
              <div className="text-3xl font-bold">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
