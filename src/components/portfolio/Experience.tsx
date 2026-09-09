import { useState } from "react";
import { ChevronDown, Lock } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";
import { playPillClick } from "@/lib/audio";

export function Experience() {
  const [open, setOpen] = useState(0);

  const toggle = (i: number) => {
    playPillClick();
    setOpen((prev) => (prev === i ? -1 : i));
  };

  return (
    <section
      id="experience"
      className="w-full scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 border-t border-border/40"
    >
      <SectionHeading
        label="Work &amp; Roles"
        title="Experience"
        subtitle="Where I've built production systems and scalable architectures."
      />

      <div className="mt-10 sm:mt-12 border-t border-border/70">
        {experience.map((role, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={role.company} delay={i * 80}>
              <div
                className={cn(
                  "border-b border-border/70 transition-colors duration-300",
                  isOpen && "bg-surface/30",
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full flex-col sm:flex-row sm:items-baseline justify-between gap-4 py-5 sm:py-6 text-left cursor-pointer group px-2 sm:px-4"
                >
                  <div className="space-y-1 sm:space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-display text-2xl sm:text-3xl font-normal text-foreground group-hover:text-accent transition-colors">
                        {role.role}
                      </h3>
                      <span className="text-base sm:text-lg text-muted-foreground font-light">
                        at {role.company}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                      {role.location}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0">
                    <span className="font-mono text-xs text-muted-foreground">
                      {role.duration}
                    </span>
                    <div
                      className={cn(
                        "size-7 rounded-full border border-border flex items-center justify-center transition-transform duration-300",
                        isOpen ? "rotate-180 border-accent text-accent" : "text-muted-foreground group-hover:border-foreground/40",
                      )}
                    >
                      <ChevronDown className="size-4" />
                    </div>
                  </div>
                </button>

                {/* Disclosure Content */}
                <div
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-expo)]",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-2 sm:px-4 pb-6 sm:pb-8 max-w-4xl space-y-6">
                      <p className="text-[15.5px] leading-[1.8] text-foreground/90 font-light">
                        {role.summary}
                      </p>

                      <ul className="space-y-3 pt-2">
                        {role.responsibilities.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-3.5 text-[14px] leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>

                      {role.note && (
                        <div className="flex items-start gap-3 rounded-md bg-surface/80 border border-border/80 p-4 text-xs leading-relaxed text-muted-foreground">
                          <Lock className="size-4 shrink-0 text-accent mt-0.5" />
                          <span>{role.note}</span>
                        </div>
                      )}

                      <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
                        <span className="text-foreground/50 uppercase tracking-wider">Technologies:</span>
                        <span>{role.tech.join(" · ")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
