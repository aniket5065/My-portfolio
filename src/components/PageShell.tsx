import { motion } from "framer-motion";

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-mesh pt-24 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-6 pb-20"
      >
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-12 rounded-full bg-primary" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Explore</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-balance leading-none">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </motion.div>
    </div>
  );
}
