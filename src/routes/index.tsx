import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Journey } from "@/components/site/Journey";
import { Certificates } from "@/components/site/Certificates";
import { Connect } from "@/components/site/Connect";
import { Contact, Footer } from "@/components/site/Contact";

const TITLE = "Sanika H P — AI & Data Science Student Portfolio";
const DESCRIPTION =
  "Portfolio of Sanika H P, an AI & Data Science undergraduate at REVA University, Bengaluru — Python, machine learning, IoT robotics and web projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

function Index() {
  useEffect(() => {
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === KONAMI[i].toLowerCase()) {
        i++;
        if (i === KONAMI.length) {
          i = 0;
          toast("🤖 Cheat code accepted", {
            description: "You unlocked nothing. But respect: you knew the code.",
          });
        }
      } else {
        i = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Certificates />
      <Connect />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
