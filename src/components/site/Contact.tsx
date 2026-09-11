import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Reveal } from "./Reveal";
import { GITHUB_URL, LINKEDIN_URL } from "./Connect";

const EMAIL = "sanikahp4@gmail.com";
const dontClick = [
  "Do Not Click",
  "I told you not to.",
  "Seriously?",
  "Fine. You win. 🫡",
];

export function Contact() {
  const [n, setN] = useState(0);

  return (
    <section
      id="contact"
      className="bg-secondary/50 scroll-mt-24 border-t border-border py-20"
    >
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Want to say hello? 👋
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Have a project, opportunity, suggestion, or just want to say hi? My inbox is open.
          </p>

          <motion.a
            href={`mailto:${EMAIL}`}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            <Mail size={16} /> {EMAIL}
          </motion.a>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-brand rounded-full border border-border bg-card p-3 text-foreground transition-transform hover:-translate-y-1"
            >
              <Github size={18} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-brand rounded-full border border-border bg-card p-3 text-foreground transition-transform hover:-translate-y-1"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <div className="mt-12">
            <motion.button
              type="button"
              onClick={() => setN((v) => Math.min(v + 1, 3))}
              whileHover={{ rotate: n < 3 ? -1.5 : 0 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full border border-dashed border-border bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground"
            >
              {dontClick[n]}
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
      <p className="text-sm text-muted-foreground">© 2026 Sanika H P</p>
      <p className="text-center text-xs text-muted-foreground">
        Built with curiosity, caffeine and a suspicious amount of debugging.
      </p>
      <div className="flex gap-2">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github size={18} />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
  );
}
