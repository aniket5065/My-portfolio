import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-primary-soft/40 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aniket Prakash Mehatar. 
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"
             className="p-2 rounded-full bg-card border border-border hover:bg-primary hover:border-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="p-2 rounded-full bg-card border border-border hover:bg-primary hover:border-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:aniketmehatar2004@gmail.com" aria-label="Email"
             className="p-2 rounded-full bg-card border border-border hover:bg-primary hover:border-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
