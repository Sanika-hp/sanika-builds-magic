import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GraduationCap, Cpu, Bot, Globe } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const steps = [
  {
    icon: GraduationCap,
    title: "Artificial Intelligence & Data Science",
    sub: "REVA University, Bengaluru",
  },
  { icon: Cpu, title: "Python & Machine Learning", sub: "Hands-on project experience" },
  { icon: Bot, title: "IoT & Robotics", sub: "Surveillance Robot project" },
  { icon: Globe, title: "Web Development", sub: "Portfolio and web projects" },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 40%"] });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="bg-secondary/50 scroll-mt-24 border-y border-border py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          kicker="Journey"
          title="How I got here"
          joke="A timeline of curiosity, mild panic and commits."
        />

        <div ref={ref} className="relative">
          <div className="bg-border absolute top-6 right-0 left-0 hidden h-px md:block">
            <motion.div className="bg-brand h-px" style={{ width }} />
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i}>
                <div className="relative">
                  <span className="bg-card text-foreground relative z-10 grid h-12 w-12 place-items-center rounded-full border border-border">
                    <s.icon size={18} />
                  </span>
                  <h3 className="font-display mt-4 text-base font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
