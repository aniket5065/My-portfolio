import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-primary-soft/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="font-bold tracking-tight text-lg">
            Aniket
            <span className="text-primary-foreground/80 bg-primary px-1.5 py-0.5 ml-1 rounded-md">
              .dev
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const Icon = l.icon;
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium inline-flex items-center gap-1.5 transition-all ${
                    active
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-foreground/70 hover:text-foreground hover:bg-primary/30"
                  }`}
                >
                  <Icon size={15} />
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-primary/30 transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile side dock */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-card border-l border-border shadow-elegant flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-border bg-primary-soft">
            <span className="font-bold tracking-tight">
              Aniket
              <span className="bg-primary px-1.5 py-0.5 ml-1 rounded-md">.dev</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-md hover:bg-primary/40 transition-colors"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-3">
            <p className="px-3 pt-2 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </p>
            <ul className="space-y-1">
              {links.map((l) => {
                const Icon = l.icon;
                const active = pathname === l.to;
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        active
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "text-foreground/80 hover:bg-primary-soft"
                      }`}
                    >
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                          active
                            ? "bg-card/30"
                            : "bg-primary-soft border border-primary/30"
                        }`}
                      >
                        <Icon size={16} />
                      </span>
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-border p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Connect
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex-1 flex items-center justify-center p-2.5 rounded-lg bg-primary-soft border border-primary/30 hover:bg-primary transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex-1 flex items-center justify-center p-2.5 rounded-lg bg-primary-soft border border-primary/30 hover:bg-primary transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:aniketmehatar2004@gmail.com"
                aria-label="Email"
                className="flex-1 flex items-center justify-center p-2.5 rounded-lg bg-primary-soft border border-primary/30 hover:bg-primary transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
