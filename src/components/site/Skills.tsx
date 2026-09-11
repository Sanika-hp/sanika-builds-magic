import { motion } from "motion/react";
import {
  Braces,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Database,
  GitBranch,
  LineChart,
  Palette,
  Sigma,
  Atom,
  FileCode2,
} from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const skills = [
  { name: "Python", icon: Braces, level: 88, joke: "Because talking to computers in English didn't work." },
  { name: "Artificial Intelligence", icon: BrainCircuit, level: 80, joke: "Teaching machines to guess confidently." },
  { name: "Data Science", icon: ChartNoAxesCombined, level: 78, joke: "Finding stories hidden in messy spreadsheets." },
  { name: "Machine Learning", icon: Sigma, level: 75, joke: "Mostly fixing the data, occasionally the model." },
  { name: "Data Analysis", icon: LineChart, level: 82, joke: "Charts that finally explain themselves." },
  { name: "SQL", icon: Database, level: 76, joke: "Making databases answer my questions." },
  { name: "HTML", icon: FileCode2, level: 90, joke: "The skeleton nobody claps for." },
  { name: "CSS", icon: Palette, level: 84, joke: "Centering a div: a lifelong journey." },
  { name: "JavaScript", icon: Code2, level: 74, joke: "It works. Nobody knows why. Not even me." },
  { name: "React", icon: Atom, level: 72, joke: "Components everywhere, state somewhere." },
  { name: "Git & GitHub", icon: GitBranch, level: 80, joke: "Where my code goes to live and sometimes cry." },
];

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/50 scroll-mt-24 border-y border-border py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          kicker="Skills"
          title="My Superpowers ⚡"
          joke="Some I know. Some I am negotiating with."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i % 3}>
              <motion.article
                whileHover={{ y: -6 }}
                className="card-lift group h-full rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-brand-soft text-foreground grid h-10 w-10 place-items-center rounded-xl transition-transform group-hover:rotate-6">
                    <s.icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground">{s.name}</h3>
                </div>

                <div className="bg-muted mt-4 h-1.5 w-full overflow-hidden rounded-full">
                  <motion.div
                    className="bg-brand h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>

                <p className="mt-3 text-sm text-muted-foreground">{s.joke}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
