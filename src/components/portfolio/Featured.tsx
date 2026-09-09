import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Cpu,
  Database,
  Github,
  Play,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { featuredProject as p } from "@/data/portfolio";
import { useReveal } from "@/hooks/useReveal";
import { Reveal, SectionHeading } from "./Reveal";
import { playPillClick, playTechTrigger } from "@/lib/audio";
import { cn } from "@/lib/utils";

const ARCHITECTURE_DEEP_DIVES = [
  {
    step: "Multimodal Emotion Capture",
    subtitle: "Client-side 3D facial mesh & acoustic valence analysis",
    spec: "MediaPipe 468-Mesh · Wav2Vec 2.0 Acoustic Classifier",
    icon: ShieldCheck,
    details: [
      "Extracts 468 3D facial landmarks directly in the browser via MediaPipe for zero-latency micro-expression analysis.",
      "Processes audio streams through Wav2Vec 2.0 acoustic feature embeddings to detect vocal valence and stress arousal levels.",
      "Client-side processing ensures raw biometric video frames never leave the user's local device, preserving strict privacy.",
    ],
    metric: "Inference Latency: 24ms · Frame Rate: 30 FPS · Privacy: 100% Client-Side",
  },
  {
    step: "Clinical Assessment Engine",
    subtitle: "Standardized psychometric scoring with longitudinal tracking",
    spec: "PHQ-9 · GAD-7 · PSS-10 Scoring Matrix",
    icon: Cpu,
    details: [
      "Automated diagnostic scoring workflows for Depression (PHQ-9), Anxiety (GAD-7), and Perceived Stress (PSS).",
      "Computes weighted temporal score trajectories over time to flag sudden clinical severity shifts.",
      "Configurable clinical thresholds trigger contextual resource recommendations and immediate wellness guidance.",
    ],
    metric: "Evaluation Harness: Standardized · Longitudinal Drift: Tracked",
  },
  {
    step: "AI Copilot & Crisis Escalation",
    subtitle: "Context-aware conversational assistance with safety SOS",
    spec: "OpenAI API · Crisis Intervention Trigger",
    icon: Sparkles,
    details: [
      "Compassionate, structured conversational agent for mood reflection, guided breathing, and journaling insights.",
      "Real-time semantic safety classifier detects acute crisis sentiment and immediately surfaces Emergency SOS & helpline contacts.",
      "Session context sanitized to prevent storage of Personally Identifiable Information (PII).",
    ],
    metric: "Safety Filter: Active · Emergency SOS Response: < 5ms",
  },
  {
    step: "Platform Architecture",
    subtitle: "Server-rendered responsive UI with mobile runtime",
    spec: "Next.js 14 App Router · Capacitor.js · Radix UI",
    icon: Server,
    details: [
      "Server-rendered responsive UI with Next.js 14 App Router and accessible Radix primitives.",
      "Capacitor.js integration enabling cross-platform deployment across desktop web and Android native environments.",
      "Role-based access control separating Student Users, Verified Volunteers, and Administrator cohorts.",
    ],
    metric: "Render Time: p95 < 60ms · Mobile: Native Ready",
  },
  {
    step: "Secure Persistence Layer",
    subtitle: "Serverless PostgreSQL with Prisma ORM",
    spec: "Neon PostgreSQL · Prisma Schema · Row-Level Security",
    icon: Database,
    details: [
      "Prisma ORM schema with strict relations between user profiles, confidential journals, and peer support posts.",
      "De-identified cohort analytics for university administrators without exposing individual student records.",
      "Encrypted journal entries stored with isolated user-key verification.",
    ],
    metric: "Database: Neon Serverless · Connection Pooling: Active",
  },
];

function ArchitectureInspector() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simLog, setSimLog] = useState<string | null>(null);
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const activeDive = ARCHITECTURE_DEEP_DIVES[activeStep]!;
  const Icon = activeDive.icon;

  const SIMULATION_LOGS = [
    "MULTIMODAL INFERENCE: MediaPipe 468-point mesh active (30 FPS). Valence: 0.72, Arousal: 0.41.",
    "CLINICAL EVALUATION: PHQ-9 (Score: 4/27 - Minimal) & GAD-7 submitted. Baseline confirmed.",
    "AI WELLNESS COPILOT: Structured OpenAI prompt stream initialized. Safety status: Nominal.",
    "PLATFORM ORCHESTRATION: Next.js 14 SSR response in 42ms. Capacitor mobile runtime synced.",
    "DATA PERSISTENCE: De-identified session metrics committed to Neon PostgreSQL via Prisma.",
  ];

  const runSimulation = () => {
    playTechTrigger();
    setIsSimulating(true);
    let step = 0;
    setActiveStep(0);
    setSimLog(SIMULATION_LOGS[0]);

    const interval = setInterval(() => {
      step++;
      if (step < ARCHITECTURE_DEEP_DIVES.length) {
        setActiveStep(step);
        setSimLog(SIMULATION_LOGS[step]);
        playPillClick();
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        playTechTrigger();
      }
    }, 1800);
  };

  const handleStepClick = (i: number) => {
    playPillClick();
    setActiveStep(i);
    setSimLog(null);
  };

  return (
    <div ref={ref} className="mt-8 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-muted-foreground pb-2 border-b border-border/40">
        <span className="text-foreground font-medium">Pipeline Telemetry &amp; Node Inspection</span>
        <button
          type="button"
          onClick={runSimulation}
          disabled={isSimulating}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground hover:border-accent hover:text-accent transition-all cursor-pointer disabled:opacity-50"
        >
          {isSimulating ? (
            <>
              <span className="size-1.5 rounded-full bg-accent animate-ping" />
              <span>Simulating...</span>
            </>
          ) : (
            <>
              <Play className="size-3 fill-current" />
              <span>Simulate Multimodal Check-in</span>
            </>
          )}
        </button>
      </div>

      {simLog && (
        <div className="rounded-md bg-surface p-3 font-mono text-xs text-foreground border border-accent/40 flex items-center gap-2 animate-in fade-in duration-200">
          <span className="size-2 rounded-full bg-accent animate-pulse shrink-0" />
          <span className="text-accent font-semibold">LOG:</span>
          <span>{simLog}</span>
        </div>
      )}

      {/* Steps Navigation Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-2">
        {ARCHITECTURE_DEEP_DIVES.map((node, i) => (
          <button
            key={node.step}
            type="button"
            onClick={() => handleStepClick(i)}
            className={cn(
              "p-3 rounded-lg border text-left transition-all cursor-pointer",
              activeStep === i
                ? "border-accent bg-surface shadow-xs"
                : "border-border/60 bg-surface/30 hover:border-border text-muted-foreground",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase text-muted-foreground">0{i + 1}</span>
              {activeStep === i && <span className="size-1.5 rounded-full bg-accent" />}
            </div>
            <p className={cn("mt-1.5 text-xs font-medium truncate", activeStep === i ? "text-foreground" : "text-muted-foreground")}>
              {node.step}
            </p>
          </button>
        ))}
      </div>

      {/* Active Step Details */}
      <div className="rounded-xl border border-border/70 bg-surface/40 p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-surface border border-border flex items-center justify-center text-accent shrink-0">
            <Icon className="size-4" />
          </div>
          <div>
            <h4 className="font-display text-lg font-medium text-foreground">{activeDive.step}</h4>
            <p className="text-xs text-muted-foreground">{activeDive.subtitle}</p>
          </div>
        </div>

        <ul className="space-y-2 text-sm text-foreground/85 leading-relaxed pt-2">
          {activeDive.details.map((d, di) => (
            <li key={di} className="flex items-start gap-2.5">
              <ChevronRight className="size-3.5 mt-1 shrink-0 text-accent/80" />
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <div className="pt-3 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-accent" />
            Specification: {activeDive.spec}
          </span>
          <span className="text-foreground/90 font-medium">{activeDive.metric}</span>
        </div>
      </div>
    </div>
  );
}

export function Featured() {
  const [showArchitecture, setShowArchitecture] = useState(false);

  return (
    <section className="grain relative overflow-hidden border-t border-border/40 py-16 sm:py-20">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <SectionHeading
          label="Featured Case Study"
          title="CampusCare"
          subtitle="Smart India Hackathon 2025 National Grand Finalist. An AI-powered mental health support ecosystem."
        />

        <div className="mt-10 sm:mt-12 grid gap-10 sm:gap-12 lg:grid-cols-12 items-start">
          {/* Left: Narrative and Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-light text-foreground">
              {p.tagline}
            </h3>
            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-muted-foreground">
              {p.description}
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-xs font-semibold transition-all hover:opacity-90"
                >
                  <span>Launch Live Platform</span>
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-3 text-xs font-medium text-foreground hover:border-foreground/40 transition-colors"
                >
                  <Github className="size-3.5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: Problem & Result */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 lg:border-l lg:border-border/40 lg:pl-10">
            <div className="space-y-2">
              <h4 className="mono-label text-foreground">The Challenge</h4>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-muted-foreground">
                {p.problem}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="mono-label text-foreground">Outcome &amp; Impact</h4>
              <p className="text-sm sm:text-[14.5px] leading-relaxed text-foreground/90 font-light">
                {p.result}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-border/40 font-mono text-xs text-muted-foreground">
              <span className="block text-[10px] uppercase text-foreground/50">Core Technologies:</span>
              <span>{p.tech.join(" · ")}</span>
            </div>
          </div>
        </div>

        {/* Expandable Technical Deep-Dive Inspector */}
        <div className="mt-10 pt-6 border-t border-border/40">
          <button
            type="button"
            onClick={() => {
              playPillClick();
              setShowArchitecture((v) => !v);
            }}
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <ChevronDown className={cn("size-4 transition-transform", showArchitecture && "rotate-180 text-accent")} />
            <span>{showArchitecture ? "Hide Technical Pipeline Inspector" : "Explore Technical Architecture & System Inspector"}</span>
          </button>

          {showArchitecture && (
            <div className="animate-in fade-in duration-300 pt-4">
              <ArchitectureInspector />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
