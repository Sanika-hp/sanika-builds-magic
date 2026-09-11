import { motion } from "motion/react";
import { Bot, Home, Github, ArrowUpRight } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const GITHUB = "https://github.com/Sanika-hp/anime_website.git";

const projects = [
  {
    title: "Surveillance Robot",
    icon: Bot,
    description:
      "An IoT-based surveillance robot designed to provide remote monitoring capabilities using connected hardware and sensors.",
    tags: ["IoT", "Robotics", "Sensors"],
    joke: "Yes, I made this instead of watching another tutorial.",
    tint: "bg-sky/40",
  },
  {
    title: "House Price Prediction",
    icon: Home,
    description:
      "A Python-based machine learning project that predicts house prices using relevant property features.",
    tags: ["Python", "Machine Learning", "Data Science"],
    joke: "It predicts prices better than it predicts my sleep schedule.",
    tint: "bg-butter/40",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionTitle
        kicker="Projects"
        title="Things I Actually Built 🚀"
        joke="Things I built instead of studying."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i}>
            <motion.article
              whileHover={{ y: -8 }}
              className="card-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6"
            >
              <div
                className={`${p.tint} grid h-40 place-items-center overflow-hidden rounded-2xl`}
              >
                <motion.span
                  className="text-foreground"
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                >
                  <p.icon size={64} strokeWidth={1.2} className="transition-transform duration-500 group-hover:scale-110" />
                </motion.span>
              </div>

              <h3 className="font-display mt-5 text-xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-secondary rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                <p className="text-brand text-sm font-medium">{p.joke}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
                  >
                    <Github size={14} /> View code
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground"
                  >
                    Ask me about it <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
