import { useMemo } from "react";

const STACK_ITEMS = [
  "PyTorch",
  "Kubernetes",
  "Apache Airflow",
  "MLflow",
  "MinIO S3",
  "FastAPI",
  "PostgreSQL",
  "React",
  "TypeScript",
  "Docker",
  "Time-Series LSTM",
  "Scikit-Learn",
  "Distributed Systems",
  "SIH '25 National Finalist",
];

export function TechMarquee({ className = "" }: { className?: string }) {
  const items = useMemo(() => [...STACK_ITEMS, ...STACK_ITEMS], []);

  return (
    <div
      className={`relative overflow-hidden py-3.5 select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] border-y border-border/40 bg-surface/30 ${className}`}
    >
      <div className="flex w-max animate-[marquee_42s_linear_infinite] hover:[animation-play-state:paused] items-center gap-8 text-[11px] font-mono tracking-[0.2em] uppercase text-muted-foreground/70">
        {items.map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center gap-8 shrink-0">
            <span className="transition-colors hover:text-foreground cursor-default">{item}</span>
            <span className="size-1 rounded-full bg-border-strong" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
