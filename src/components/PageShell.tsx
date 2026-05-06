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
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-6 pt-16 pb-12"
    >
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        )}
        <div className="mt-5 h-1 w-16 rounded-full bg-primary" />
      </header>
      {children}
    </motion.div>
  );
}
