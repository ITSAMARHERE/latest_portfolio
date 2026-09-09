import { skills } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

function LevelPill({ level }: { level: "Daily" | "Strong" | "Working" }) {
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider",
        level === "Daily" && "bg-accent/15 text-accent border border-accent/30 font-medium",
        level === "Strong" && "bg-foreground/10 text-foreground/90 border border-foreground/15",
        level === "Working" && "bg-foreground/5 text-muted-foreground border border-border/70",
      )}
    >
      {level}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="w-full scroll-mt-20 px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20 border-t border-border/50">
      <SectionHeading
        label="Technical Toolkit"
        title="Languages, frameworks &amp; infrastructure."
        subtitle="The dedicated stack I reach for to engineer robust, high-throughput software and machine learning systems."
      />

      <div className="mt-10 sm:mt-12 grid gap-8 sm:gap-10 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((category, ci) => (
          <Reveal key={category.name} delay={ci * 80} className="flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="mono-label text-[11px] text-foreground font-semibold">
                {category.name}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {category.items.length} tools
              </span>
            </div>

            <ul className="flex flex-col gap-3.5">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="group relative rounded-xl border border-border/60 bg-surface/30 p-4 transition-all duration-300 hover:border-border-strong hover:bg-surface/60"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[14.5px] font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      {item.name}
                    </span>
                    <LevelPill level={item.level} />
                  </div>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                    {item.use}
                  </p>

                  {item.projects && item.projects.length > 0 && (
                    <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/30">
                      <span className="font-mono text-[9px] text-muted-foreground/70 uppercase tracking-widest">
                        Used in:
                      </span>
                      {item.projects.map((p) => (
                        <span
                          key={p}
                          className="font-mono text-[9.5px] text-muted-foreground bg-background/80 px-1.5 py-0.5 rounded border border-border/40"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
