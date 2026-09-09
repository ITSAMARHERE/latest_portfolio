import { Github, Star } from "lucide-react";
import { lab, openSource, contact } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

function StatusIndicator({ status }: { status: string }) {
  const isExperimenting = status === "EXPERIMENTING";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-widest">
      <span
        className={cn(
          "size-1.5 rounded-full",
          status === "STABLE" && "bg-accent",
          status === "SHIPPED" && "bg-emerald-500",
          status === "PAUSED" && "bg-amber-500",
          isExperimenting && "bg-accent/70 animate-pulse",
        )}
        aria-hidden
      />
      <span className="text-muted-foreground">{status}</span>
    </span>
  );
}

export function Lab() {
  return (
    <section id="lab" className="w-full scroll-mt-20 px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20 border-t border-border/50">
      <SectionHeading
        label="Research &amp; Experiments"
        title="Open source &amp; prototypes."
        subtitle="Explorations in distributed systems, machine learning pipelines, and experimental developer tooling."
      />

      <div className="mt-10 sm:mt-12 grid gap-10 sm:gap-14 lg:grid-cols-12">
        {/* Left Column: Open Source Contributions & Repos */}
        <div className="lg:col-span-5">
          <Reveal>
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
              {openSource.headline}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
              {openSource.note}
            </p>

            {/* Language Breakdown Bar */}
            <div className="mt-8">
              <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-border/80">
                {openSource.languages.map((l, li) => {
                  const colors = [
                    "bg-accent",
                    "bg-accent/60",
                    "bg-border-strong",
                    "bg-foreground/20",
                    "bg-foreground/10",
                  ];
                  return (
                    <div
                      key={l.name}
                      className={cn("h-full", colors[li % colors.length])}
                      style={{ width: `${l.share}%` }}
                      title={`${l.name}: ${l.share}%`}
                    />
                  );
                })}
              </div>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10.5px]">
                {openSource.languages.map((l, li) => {
                  const dots = [
                    "bg-accent",
                    "bg-accent/60",
                    "bg-border-strong",
                    "bg-foreground/20",
                    "bg-foreground/10",
                  ];
                  return (
                    <li key={l.name} className="flex items-center gap-1.5 text-muted-foreground">
                      <span className={cn("size-1.5 rounded-full", dots[li % dots.length])} />
                      <span>{l.name}</span>
                      <span className="text-foreground/40">{l.share}%</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Repositories List */}
            <div className="mt-10 flex flex-col gap-2 divide-y divide-border/40 border-t border-border/40">
              {openSource.repos.map((repo) => (
                <a
                  key={repo.name}
                  href={`${contact.github.replace(/\/$/, "")}/${repo.name}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 py-4 transition-colors"
                >
                  <div>
                    <span className="flex items-center gap-2 text-[15px] font-semibold text-foreground group-hover:text-accent transition-colors">
                      <Github className="size-4" />
                      {repo.name}
                    </span>
                    <p className="mt-1 text-[13px] text-muted-foreground">{repo.description}</p>
                  </div>
                  <div className="flex items-center gap-4 font-mono text-[11px] text-muted-foreground shrink-0">
                    <span>{repo.language}</span>
                    <span className="flex items-center gap-1">
                      <Star className="size-3 text-accent" />
                      {repo.stars}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Column: Research Prototypes */}
        <div className="lg:col-span-7">
          <Reveal delay={100} className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="mono-label text-[11px] text-foreground font-semibold">
                Research Prototypes &amp; Notes
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {lab.length} active experiments
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {lab.map((experiment) => (
                <div
                  key={experiment.id}
                  className="flex flex-col justify-between rounded-xl border border-border/60 bg-surface/30 p-5 transition-all duration-300 hover:border-border-strong hover:bg-surface/50"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[10.5px] font-medium text-accent">
                        {experiment.id}
                      </span>
                      <StatusIndicator status={experiment.status} />
                    </div>
                    <h4 className="text-[15px] font-semibold text-foreground leading-snug">
                      {experiment.title}
                    </h4>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {experiment.note}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
                    {experiment.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded bg-background/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border/40"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
