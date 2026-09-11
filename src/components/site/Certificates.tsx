import { motion } from "motion/react";
import { Award, BadgeCheck } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const certs = [
  { title: "IBM Python Certificate", issuer: "IBM", icon: Award, note: "Python, but with a badge." },
  {
    title: "Wadhwani Certificate",
    issuer: "Wadhwani Foundation",
    icon: BadgeCheck,
    note: "Skills, entrepreneurship and a lot of notes.",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <SectionTitle
        kicker="Certificates"
        title="Proof I finished things 🎓"
        joke="Certificates proving I clicked 'Complete Course' and actually learned something. 😎"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i}>
            <motion.div
              whileHover={{ y: -6, rotate: i % 2 ? -0.6 : 0.6 }}
              className="card-lift h-full rounded-3xl border border-border bg-card p-6"
            >
              <span className="bg-mint/40 text-foreground grid h-11 w-11 place-items-center rounded-2xl">
                <c.icon size={20} />
              </span>
              <h3 className="font-display mt-4 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
                {c.note}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
