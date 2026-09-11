import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const GITHUB_URL = "https://github.com/Sanika-hp/anime_website.git";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sanika-h-p-a76387428";

export function Connect() {
  const [warn, setWarn] = useState(false);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card-lift relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8">
            <div className="grid-paper pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative">
              <span className="bg-secondary text-foreground grid h-12 w-12 place-items-center rounded-2xl">
                <Github size={22} />
              </span>
              <h2 className="font-display mt-5 text-2xl font-bold text-foreground">
                My Code Lives Here 👨‍💻
              </h2>
              <p className="mt-2 text-sm break-all text-muted-foreground">{GITHUB_URL}</p>

              <div className="relative mt-6 inline-block">
                <motion.a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onHoverStart={() => setWarn(true)}
                  onHoverEnd={() => setWarn(false)}
                  whileHover={{ y: -3 }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Visit My GitHub <ArrowUpRight size={16} />
                </motion.a>
                <AnimatePresence>
                  {warn && (
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="pointer-events-none absolute top-full left-0 mt-2 w-max max-w-[16rem] rounded-lg border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground shadow-sm"
                    >
                      Warning: Contains code. Some of it may even work.
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="card-lift bg-sky/25 h-full rounded-3xl border border-border p-8">
            <span className="bg-card text-foreground grid h-12 w-12 place-items-center rounded-2xl border border-border">
              <Linkedin size={22} />
            </span>
            <h2 className="font-display mt-5 text-2xl font-bold text-foreground">
              Let&apos;s Connect 🤝
            </h2>
            <p className="mt-2 text-sm break-all text-muted-foreground">
              www.linkedin.com/in/sanika-h-p-a76387428
            </p>
            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground"
            >
              Connect on LinkedIn <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
