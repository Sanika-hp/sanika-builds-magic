import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import robot from "@/assets/robot.png";

const words = ["Hi,", "I'm", "Sanika", "H", "P", "👋"];

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });
  const [clicks, setClicks] = useState(0);
  const [bubble, setBubble] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      x.set(Math.max(-18, Math.min(18, (e.clientX - cx) / 22)));
      y.set(Math.max(-14, Math.min(14, (e.clientY - cy) / 22)));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  const onRobotClick = () => {
    const next = clicks + 1;
    setClicks(next);
    const lines = ["Beep. Please stop poking me.", "You again?", "Okay okay, you found me. 😭"];
    setBubble(lines[Math.min(next, 3) - 1]);
    window.setTimeout(() => setBubble(null), 2600);
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
      <div className="grid-paper pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_20%,#000,transparent)]" />
      <motion.div
        aria-hidden
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="bg-brand-soft absolute -top-6 -left-10 h-52 w-52 rounded-full blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="bg-sky/50 absolute top-24 -right-16 h-64 w-64 rounded-full blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <motion.span
              className="bg-mint inline-block h-2 w-2 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            Currently building something... probably.
          </motion.div>

          <h1 className="text-4xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-6xl">
            {words.map((w, i) => (
              <motion.span
                key={w + i}
                initial={{ opacity: 0, y: 26, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.1 + i * 0.07, type: "spring", stiffness: 220, damping: 16 }}
                className="mr-3 inline-block"
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-5 max-w-xl text-lg font-medium text-foreground/80"
          >
            AI &amp; Data Science student who is still teaching computers how to behave. 🤖
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.6 }}
            className="mt-4 max-w-xl text-base text-muted-foreground"
          >
            Undergraduate AI &amp; Data Science student passionate about Python, data, AI, web
            development and building things that hopefully work on the first try.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              View My Work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="hover:border-brand hover:text-brand inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5"
            >
              Let&apos;s Connect
              <Sparkles size={16} />
            </a>
          </motion.div>
        </div>

        <div ref={ref} className="relative mx-auto w-full max-w-sm">
          <motion.div
            style={{ x: sx, y: sy }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 140, damping: 14 }}
            className="relative"
          >
            <motion.button
              type="button"
              aria-label="Poke the robot"
              onClick={onRobotClick}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="focus-visible:ring-ring block w-full cursor-pointer rounded-3xl focus-visible:ring-2 focus-visible:outline-none"
            >
              <img src={robot} alt="Friendly robot mascot" width={768} height={768} className="w-full" />
            </motion.button>

            <AnimatePresence>
              {bubble && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute top-2 -right-2 rounded-2xl rounded-br-sm border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  {bubble}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            (He follows your cursor. Try clicking him three times.)
          </p>
        </div>
      </div>
    </section>
  );
}
