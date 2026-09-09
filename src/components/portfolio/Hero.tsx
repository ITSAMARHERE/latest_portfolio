import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { openContactModal } from "./ContactModal";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="top"
      className="grain relative min-h-0 flex flex-col justify-between overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16"
    >
      {/* Desktop & Tablet: Seamless Right-Side Warm-Graded Portrait */}
      <div
        data-visible={mounted}
        style={{ transitionDelay: "200ms" }}
        className="reveal pointer-events-none absolute right-0 top-0 bottom-0 w-[50%] lg:w-[50%] xl:w-[48%] hidden md:block overflow-hidden select-none z-0"
      >
        <img
          src="/images/amar-pal.png"
          alt="Amar Pal"
          className="h-full w-full object-cover object-[50%_15%] brightness-[0.98] contrast-[1.03]"
        />
        {/* Editorial Feather Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 lg:h-56 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/90 via-background/20 to-transparent" />
      </div>

      {/* Mobile Backdrop Portrait */}
      <div className="pointer-events-none absolute inset-0 md:hidden overflow-hidden select-none z-0">
        <img
          src="/images/amar-pal.png"
          alt=""
          className="h-full w-full object-cover object-[60%_15%] opacity-20 dark:opacity-15 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl space-y-6 sm:space-y-8">
          {/* Subtle Editorial Overline with Handwritten Annotation */}
          <div data-visible={mounted} className="reveal flex items-center gap-4">
            <span className="mono-label text-muted-foreground">
              Software &amp; Machine Learning Engineer
            </span>
            <span className="hidden sm:inline-block font-handwriting text-xl text-accent -rotate-3 select-none">
              ~ crafting full-stack AI platforms
            </span>
          </div>

          {/* Dramatic Display Headline */}
          <h1 className="font-display text-[clamp(2.75rem,6.8vw,6.25rem)] font-normal leading-[1.02] tracking-[-0.035em] text-foreground">
            Building intelligent systems that solve{" "}
            <em className="font-italic text-accent underline decoration-accent/30 underline-offset-8">
              real problems.
            </em>
          </h1>

          {/* Bio Narrative */}
          <div
            data-visible={mounted}
            style={{ transitionDelay: "300ms" }}
            className="reveal max-w-2xl lg:max-w-3xl"
          >
            <p className="text-[16px] sm:text-[17.5px] leading-[1.75] text-muted-foreground">
              {profile.intro}
            </p>
          </div>

          {/* Action CTAs */}
          <div
            data-visible={mounted}
            style={{ transitionDelay: "400ms" }}
            className="reveal flex flex-col sm:flex-row sm:items-center gap-4 pt-1"
          >
            <button
              type="button"
              onClick={() => scrollToId("projects")}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] w-full sm:w-auto cursor-pointer"
            >
              <span>Selected Work</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => openContactModal()}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface/50 px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-surface hover:border-foreground/30 w-full sm:w-auto cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section: Pure Typographic Scale, No Cards or Borders */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-10 sm:pt-14">
        <div
          data-visible={mounted}
          style={{ transitionDelay: "500ms" }}
          className="reveal grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10 max-w-4xl border-t border-border/40 pt-6"
        >
          <div>
            <div className="font-display text-4xl sm:text-5xl font-light tracking-tight text-foreground">
              2<span className="text-accent text-3xl sm:text-4xl">+</span>
            </div>
            <div className="mt-1.5 text-xs text-muted-foreground font-mono">
              Years Experience
            </div>
          </div>

          <div>
            <div className="font-display text-4xl sm:text-5xl font-light tracking-tight text-foreground">
              10<span className="text-accent text-3xl sm:text-4xl">+</span>
            </div>
            <div className="mt-1.5 text-xs text-muted-foreground font-mono">
              Systems Delivered
            </div>
          </div>

          <div>
            <div className="font-display text-4xl sm:text-5xl font-light tracking-tight text-foreground">
              5<span className="text-accent text-3xl sm:text-4xl">+</span>
            </div>
            <div className="mt-1.5 text-xs text-muted-foreground font-mono">
              Core Stacks
            </div>
          </div>

          <div>
            <div className="font-display text-4xl sm:text-5xl font-light tracking-tight text-accent">
              SIH &apos;25
            </div>
            <div className="mt-1.5 text-xs text-muted-foreground font-mono">
              National Finalist
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
