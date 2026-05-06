import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  FolderKanban,
  Briefcase,
  Award,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/experience", label: "Experience", icon: Briefcase },
  { to: "/certifications", label: "Certifications", icon: Award },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full p-4 md:p-6 pointer-events-none">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 glass rounded-2xl pointer-events-auto shadow-premium">
          <Link to="/" className="group flex items-center gap-1 font-bold tracking-tighter text-xl">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform">
              A
            </div>
            <span className="hidden sm:inline">Aniket</span>
            <span className="text-primary font-black">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const Icon = l.icon;
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold inline-flex items-center gap-2 transition-all ${
                    active
                      ? "bg-primary text-primary-foreground shadow-glow scale-105"
                      : "text-foreground/70 hover:text-foreground hover:bg-primary-soft"
                  }`}
                >
                  <Icon size={14} className={active ? "animate-pulse" : ""} />
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded-xl hover:bg-primary-soft transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile side dock */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/40 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-4 top-4 bottom-4 w-[calc(100%-2rem)] max-w-xs glass rounded-3xl shadow-elegant flex flex-col transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
            open ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-border/50">
            <span className="font-bold tracking-tight text-lg">
              Aniket<span className="text-primary">.dev</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-2.5 rounded-xl bg-primary-soft hover:bg-primary/20 transition-colors"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {links.map((l, i) => {
                const Icon = l.icon;
                const active = pathname === l.to;
                return (
                  <motion.li 
                    key={l.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={open ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      className={`flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                        active
                          ? "bg-primary text-primary-foreground shadow-glow"
                          : "text-foreground/80 hover:bg-primary-soft"
                      }`}
                    >
                      <span
                        className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                          active
                            ? "bg-white/20"
                            : "bg-primary-soft border border-primary/10"
                        }`}
                      >
                        <Icon size={18} />
                      </span>
                      {l.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <div className="p-6 border-t border-border/50">
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/" },
                { icon: Linkedin, href: "https://linkedin.com/" },
                { icon: Mail, href: "mailto:aniketmehatar2004@gmail.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center h-12 rounded-2xl bg-primary-soft border border-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
