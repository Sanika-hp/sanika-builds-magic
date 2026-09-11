import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  title,
  joke,
  kicker,
}: {
  title: string;
  joke: string;
  kicker?: string;
}) {
  return (
    <Reveal className="group mb-10 max-w-2xl">
      {kicker ? (
        <span className="mb-3 inline-block rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          {kicker}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-1">
        {joke}
      </p>
    </Reveal>
  );
}
