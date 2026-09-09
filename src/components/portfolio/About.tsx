import { useState } from "react";
import { profile, timeline, education } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

export function About() {
  const [activeYear, setActiveYear] = useState(timeline.length - 1);
  const active = timeline[activeYear]!;

  return (
    <section id="about" className="w-full scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20">
      <SectionHeading
        label="Background &amp; Philosophy"
        title="Engineering with craftsmanship."
        subtitle="A synthesis of distributed backend systems and applied machine learning."
      />

      <div className="mt-10 sm:mt-12 grid gap-10 sm:gap-12 lg:grid-cols-12 items-start">
        {/* Left Column: Narrative Bio & Principles */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-6">
            {profile.bio.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-[16px] sm:text-[17.5px] leading-[1.8] text-muted-foreground">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 pt-6 border-t border-border/40">
            <Reveal delay={120}>
              <h3 className="mono-label text-foreground">Engineering Principles</h3>
              <ul className="mt-4 space-y-3">
                {profile.philosophy.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[14px] leading-relaxed text-foreground/90">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <h3 className="mono-label text-foreground">Current Research &amp; Focus</h3>
              <ul className="mt-4 space-y-3">
                {profile.interests.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[14px] leading-relaxed text-foreground/90">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-border-strong" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="pt-6 border-t border-border/40">
            <h3 className="mono-label text-foreground">Core Passions</h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
              {profile.enjoys.join(" · ")}
            </p>
          </Reveal>
        </div>

        {/* Right Column: Clean Vertical Line-and-Dot Timeline & Education */}
        <div className="lg:col-span-5 space-y-12">
          {/* Vertical Line & Dot Timeline */}
          <Reveal delay={100} className="space-y-6">
            <h3 className="mono-label text-foreground">Trajectory</h3>
            <div className="relative pl-6 border-l border-border/70 space-y-8">
              {timeline.map((t, i) => {
                const isActive = activeYear === i;
                return (
                  <div
                    key={t.year}
                    className="relative group cursor-pointer"
                    onClick={() => setActiveYear(i)}
                  >
                    {/* Dot on line */}
                    <span
                      className={cn(
                        "absolute -left-[30.5px] top-1 size-2.5 rounded-full transition-all duration-300",
                        isActive
                          ? "bg-accent ring-4 ring-accent-soft scale-125"
                          : "bg-border-strong group-hover:bg-accent/70",
                      )}
                      aria-hidden
                    />
                    <div className="flex items-baseline justify-between gap-2">
                      <span
                        className={cn(
                          "font-display text-lg font-medium transition-colors",
                          isActive ? "text-foreground" : "text-foreground/75 group-hover:text-foreground",
                        )}
                      >
                        {t.label}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{t.year}</span>
                    </div>
                    <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-muted-foreground">
                      {t.note}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={180} className="space-y-6 pt-8 border-t border-border/40">
            <h3 className="mono-label text-foreground">Education &amp; Honors</h3>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.school} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h4 className="text-[14.5px] font-medium text-foreground">{e.school}</h4>
                    <span className="font-mono text-[11px] text-muted-foreground shrink-0">
                      {e.duration}
                    </span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {e.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
