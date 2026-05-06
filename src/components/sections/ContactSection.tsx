import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <div id="contact" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="grid md:grid-cols-5 gap-6">
        <motion.aside 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, boxShadow: "var(--shadow-highlight)" }}
          whileHover={{ y: -5, scale: 1.01, boxShadow: "var(--shadow-highlight)" }}
          whileTap={{ scale: 0.99 }}
          viewport={{ once: false, amount: 0.4 }}
          className="md:col-span-2 rounded-2xl bg-primary-soft border border-primary/30 p-7 space-y-5 transition-all duration-300"
        >
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
            <a href="https://github.com/aniket5065" target="_blank" rel="noreferrer" aria-label="GitHub"
               className="p-2.5 rounded-full bg-card border border-border hover:bg-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mehataraniket" target="_blank" rel="noreferrer" aria-label="LinkedIn"
               className="p-2.5 rounded-full bg-card border border-border hover:bg-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.aside>

        <motion.form
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, boxShadow: "var(--shadow-highlight)" }}
          whileHover={{ y: -5, scale: 1.005, boxShadow: "var(--shadow-highlight)" }}
          whileTap={{ scale: 0.995 }}
          viewport={{ once: false, amount: 0.4 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 rounded-2xl bg-card border border-border p-7 space-y-4 transition-all duration-300"
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
        </motion.form>
      </div>
    </div>
  );
}
