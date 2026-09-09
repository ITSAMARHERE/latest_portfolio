import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Cursor } from "@/components/portfolio/Cursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { TechMarquee } from "@/components/portfolio/TechMarquee";
import { About } from "@/components/portfolio/About";
import { Featured } from "@/components/portfolio/Featured";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Lab } from "@/components/portfolio/Lab";
import { Contact } from "@/components/portfolio/Contact";
import { ContactModal } from "@/components/portfolio/ContactModal";
import { NamasteIntro } from "@/components/portfolio/NamasteIntro";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [introFinished, setIntroFinished] = useState(false);
  const [replayKey, setReplayKey] = useState<number | null>(null);

  useEffect(() => {
    // Check if user already saw intro in current session or prefers reduced motion
    const hasSeenIntro =
      typeof window !== "undefined" &&
      sessionStorage.getItem("hasSeenNamasteIntro") === "true";
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeenIntro || prefersReducedMotion) {
      setIntroFinished(true);
    }

    const handleReplay = () => {
      setIntroFinished(false);
      setReplayKey(Date.now());
    };

    window.addEventListener("replay-namaste-intro", handleReplay);
    return () => window.removeEventListener("replay-namaste-intro", handleReplay);
  }, []);

  return (
    <>
      <NamasteIntro
        key={replayKey ?? "initial"}
        forcePlay={replayKey !== null}
        onComplete={() => setIntroFinished(true)}
      />

      {/* Website Container - Smoothly revealed ONLY after intro completes */}
      <motion.div
        initial={false}
        animate={{
          opacity: introFinished ? 1 : 0,
          y: introFinished ? 0 : 12,
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen w-full"
        style={{
          visibility: introFinished ? "visible" : "hidden",
        }}
      >
        <Cursor />
        <Nav />
        <main className="w-full max-w-full overflow-x-hidden">
          <Hero />
          <div className="border-y border-border/40 bg-surface/20">
            <TechMarquee />
          </div>
          <About />
          <Experience />
          <Featured />
          <Projects />
          <Skills />
          <Lab />
          <Contact />
        </main>
        <ContactModal />
      </motion.div>
    </>
  );
}
