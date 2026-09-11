import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Reveal, SectionTitle } from "./Reveal";
import student from "@/assets/student-laptop.png";

function Counter({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1200, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card px-4 py-4">
      <div className="font-display text-2xl font-bold text-foreground">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionTitle
        kicker="About"
        title="A little bit about me"
        joke="Yes, I am actually real. Probably."
      />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m Sanika H P, an undergraduate Artificial Intelligence &amp; Data Science student
            at REVA University, Bengaluru.
          </p>
          <p>
            I&apos;m interested in Artificial Intelligence, Data Science, Python, analytics and web
            development. I enjoy turning ideas into projects and learning by actually building
            things.
          </p>
          <p>
            Currently, I&apos;m exploring new technologies, improving my development skills and
            creating projects that make my GitHub look slightly less empty.
          </p>
          <div className="grid grid-cols-3 gap-3 pt-2">
            <Counter to={2} label="Projects shipped" />
            <Counter to={11} suffix="+" label="Skills in progress" />
            <Counter to={99} suffix="%" label="Debug survival rate" />
          </div>
        </Reveal>

        <Reveal delay={1} className="relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-brand-soft/60 relative rounded-[2rem] border border-border p-6"
          >
            <img
              src={student}
              alt="Illustration of a student coding on a laptop"
              width={1024}
              height={1024}
              loading="lazy"
              className="mx-auto w-full max-w-sm"
            />
          </motion.div>
          <p className="mt-4 text-center text-sm text-muted-foreground italic">
            &ldquo;Powered by curiosity, Python and questionable debugging decisions.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
