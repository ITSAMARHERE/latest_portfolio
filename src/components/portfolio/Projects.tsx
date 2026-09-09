import { useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  ExternalLink,
  Layers,
  Radio,
  Search,
  Send,
  Terminal,
  UserCheck,
  UserPlus,
  Users,
} from "lucide-react";
import type { Project } from "@/data/portfolio";
import { projects } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { playPillClick, playTechTrigger } from "@/lib/audio";
import { cn } from "@/lib/utils";

type FilterType = "all" | "fullstack" | "realtime";

// ----------------------------------------------------
// ConnectHub Interactive Live Preview
// ----------------------------------------------------
function ConnectHubPreview() {
  const [activeDomain, setActiveDomain] = useState<"tech" | "medical" | "legal" | "finance">("tech");
  const [messages, setMessages] = useState<Array<{ sender: string; text: string; time: string; verified: boolean }>>([
    {
      sender: "Musharraf (Lead)",
      text: "STOMP connection handshake established over SockJS transport.",
      time: "10:42 AM",
      verified: true,
    },
    {
      sender: "Amar Pal",
      text: "Twilio SMS OTP verification active for all 30+ domain channels.",
      time: "10:43 AM",
      verified: true,
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  const domainData = {
    tech: { name: "Tech & Software", activeUsers: 148, channel: "/topic/domain.engineering" },
    medical: { name: "Healthcare & Medicine", activeUsers: 92, channel: "/topic/domain.healthcare" },
    legal: { name: "Law & Compliance", activeUsers: 64, channel: "/topic/domain.legal" },
    finance: { name: "FinTech & Banking", activeUsers: 110, channel: "/topic/domain.finance" },
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;
    playTechTrigger();
    setMessages((prev) => [
      ...prev,
      {
        sender: "You (Demo)",
        text: inputVal,
        time: "Just now",
        verified: true,
      },
    ]);
    setInputVal("");
  };

  return (
    <div className="flex h-full flex-col justify-between font-mono text-[11px] select-none p-5 sm:p-6 bg-surface/50">
      {/* Top Protocol Status Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-border/50 pb-3 text-[10.5px] gap-2">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent animate-pulse" />
          <span className="text-foreground font-semibold tracking-wide">SPRING BOOT 3 · STOMP WEBSOCKET</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-[10px]">
          <span>Twilio OTP Verified</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">OpenAI Filter Active</span>
        </div>
      </div>

      {/* Domain Switcher Tabs */}
      <div className="flex items-center gap-2 py-3 overflow-x-auto">
        {(Object.keys(domainData) as Array<keyof typeof domainData>).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              playPillClick();
              setActiveDomain(key);
            }}
            className={cn(
              "px-2.5 py-1 rounded text-[10.5px] transition-all whitespace-nowrap cursor-pointer",
              activeDomain === key
                ? "bg-accent text-accent-foreground font-semibold"
                : "bg-surface/80 text-muted-foreground hover:text-foreground hover:bg-surface",
            )}
          >
            {domainData[key].name}
          </button>
        ))}
      </div>

      {/* Live Chat Stream Simulator */}
      <div className="space-y-2 rounded-lg bg-background/60 p-3.5 border border-border/40 my-1 max-h-[140px] overflow-y-auto">
        <div className="flex items-center justify-between text-[9.5px] text-muted-foreground pb-1.5 border-b border-border/20">
          <span className="text-accent">{domainData[activeDomain].channel}</span>
          <span>{domainData[activeDomain].activeUsers} Verified Peers Online</span>
        </div>
        {messages.map((m, idx) => (
          <div key={idx} className="flex items-start justify-between gap-2 text-[11px] leading-tight pt-1">
            <div>
              <span className="font-semibold text-foreground mr-1.5">{m.sender}:</span>
              <span className="text-foreground/85 font-sans">{m.text}</span>
            </div>
            <div className="flex items-center gap-1 shrink-0 text-[9.5px] text-muted-foreground">
              <span>{m.time}</span>
              <Check className="size-3 text-accent" />
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Micro-Dispatch Input */}
      <div className="flex items-center gap-2 pt-3 border-t border-border/40">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Dispatch STOMP frame to channel..."
          className="flex-1 rounded-md bg-background/80 border border-border/60 px-3 py-1.5 text-[11px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent"
        />
        <button
          type="button"
          onClick={handleSend}
          className="inline-flex items-center gap-1.5 rounded-md bg-accent text-accent-foreground px-3 py-1.5 text-[10.5px] font-semibold transition-all hover:brightness-110 cursor-pointer"
        >
          <Send className="size-3" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// SocialSphere Interactive Live Preview
// ----------------------------------------------------
function SocialSpherePreview() {
  const [upvotes, setUpvotes] = useState(42);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [tab, setTab] = useState<"rendered" | "markdown">("rendered");

  const handleUpvote = () => {
    playTechTrigger();
    if (hasUpvoted) {
      setUpvotes((v) => v - 1);
      setHasUpvoted(false);
    } else {
      setUpvotes((v) => v + 1);
      setHasUpvoted(true);
    }
  };

  return (
    <div className="flex h-full flex-col justify-between font-mono text-[11px] select-none p-5 sm:p-6 bg-surface/50">
      <div className="flex items-center justify-between border-b border-border/50 pb-3 text-[10.5px] text-muted-foreground">
        <span className="flex items-center gap-2 text-foreground font-medium tracking-wide">
          <span className="size-2 rounded-full bg-accent animate-pulse" />
          SUPABASE REALTIME · POSTGRES BROADCAST
        </span>
        <div className="flex items-center gap-1 bg-surface/80 p-0.5 rounded border border-border/40">
          <button
            type="button"
            onClick={() => {
              playPillClick();
              setTab("rendered");
            }}
            className={cn(
              "px-2 py-0.5 rounded text-[10px] cursor-pointer transition-colors",
              tab === "rendered" ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => {
              playPillClick();
              setTab("markdown");
            }}
            className={cn(
              "px-2 py-0.5 rounded text-[10px] cursor-pointer transition-colors",
              tab === "markdown" ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Payload
          </button>
        </div>
      </div>

      <div className="space-y-2 py-2">
        {tab === "rendered" ? (
          <div className="rounded-lg bg-background/60 p-4 border border-border/40 space-y-2.5">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] text-accent font-semibold uppercase tracking-wider block">
                  #discuss / react-18-architecture
                </span>
                <p className="text-[13px] font-sans font-medium text-foreground leading-snug">
                  Recursive nested comment trees with O(1) optimistic state synchronization in Supabase
                </p>
              </div>
              <button
                type="button"
                onClick={handleUpvote}
                className={cn(
                  "flex flex-col items-center justify-center rounded-md px-2.5 py-1.5 border transition-all cursor-pointer shrink-0",
                  hasUpvoted
                    ? "border-accent bg-accent text-accent-foreground font-bold shadow-sm scale-105"
                    : "border-border/60 bg-surface/80 text-muted-foreground hover:border-accent hover:text-foreground",
                )}
              >
                <ArrowUp className="size-3" />
                <span className="text-[11px] font-bold">{upvotes}</span>
              </button>
            </div>

            <div className="flex items-center gap-3 pt-1.5 text-[10px] text-muted-foreground border-t border-border/20">
              <span className="flex items-center gap-1 text-foreground/90">
                <Users className="size-3 text-accent" />
                18 replies
              </span>
              <span>GitHub OAuth Synced</span>
              <span className="text-accent flex items-center gap-1">
                <Check className="size-3" />
                Live Broadcast
              </span>
            </div>
          </div>
        ) : (
          <div className="rounded-lg bg-background/90 p-3.5 border border-border/40 text-[10.5px] leading-relaxed text-accent font-mono overflow-x-auto">
            <span className="text-muted-foreground">// Realtime subscription pipeline</span>
            <br />
            const channel = supabase.channel(&apos;forum_posts&apos;)
            <br />
            &nbsp;&nbsp;.on(&apos;postgres_changes&apos;, &#123; event: &apos;INSERT&apos; &#125;, syncPost)
            <br />
            &nbsp;&nbsp;.subscribe();
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-border/40 pt-3 text-[10px] text-muted-foreground">
        <span>Stack: React 18 · TypeScript · Tailwind</span>
        <span>Storage: Supabase PostgreSQL</span>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Mini_LinkedIn Interactive Live Preview
// ----------------------------------------------------
function MiniLinkedInPreview() {
  const [connectionState, setConnectionState] = useState<"connect" | "pending" | "connected">("connected");
  const [toast, setToast] = useState<string | null>(null);

  const handleStateCycle = () => {
    playTechTrigger();
    if (connectionState === "connect") {
      setConnectionState("pending");
      setToast("Mailtrap: Connection notification queued");
    } else if (connectionState === "pending") {
      setConnectionState("connected");
      setToast("Graph Synced: Mutual connection established");
    } else {
      setConnectionState("connect");
      setToast("Reset connection state");
    }
  };

  return (
    <div className="flex h-full flex-col justify-between font-mono text-[11px] select-none p-5 sm:p-6 bg-surface/50">
      <div className="flex items-center justify-between border-b border-border/50 pb-3 text-[10.5px] text-muted-foreground">
        <span className="flex items-center gap-2 text-foreground font-medium tracking-wide">
          <span className="size-2 rounded-full bg-accent" />
          MERN SOCIAL GRAPH &amp; MEDIA INGESTION
        </span>
        <span className="text-accent text-[10px]">JWT Stateless Auth</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
        <div className="rounded-lg bg-background/60 p-3.5 border border-border/40 flex flex-col justify-between">
          <div>
            <span className="text-[9.5px] uppercase tracking-wider text-muted-foreground block">
              Connection State Machine
            </span>
            <span className="text-[13px] font-semibold text-foreground block mt-1">
              {connectionState === "connect" && "Disconnected"}
              {connectionState === "pending" && "Pending Approval"}
              {connectionState === "connected" && "Active & Synced"}
            </span>
          </div>
          <button
            type="button"
            onClick={handleStateCycle}
            className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-md bg-accent text-accent-foreground px-2.5 py-1.5 text-[10px] font-semibold transition-all hover:brightness-110 cursor-pointer"
          >
            {connectionState === "connect" && (
              <>
                <UserPlus className="size-3" />
                <span>Simulate Connect</span>
              </>
            )}
            {connectionState === "pending" && (
              <>
                <Check className="size-3" />
                <span>Simulate Accept</span>
              </>
            )}
            {connectionState === "connected" && (
              <>
                <UserCheck className="size-3" />
                <span>Reset Connection</span>
              </>
            )}
          </button>
        </div>

        <div className="rounded-lg bg-background/60 p-3.5 border border-border/40 flex flex-col justify-between">
          <div>
            <span className="text-[9.5px] uppercase tracking-wider text-muted-foreground block">
              Cloudinary Media Pipeline
            </span>
            <span className="text-[13px] font-semibold text-accent block mt-1">
              Multi-Resolution Ingestion
            </span>
            <span className="text-[9.5px] text-muted-foreground block mt-0.5">
              Auto WebP compression &amp; crop
            </span>
          </div>
          <div className="mt-3 text-[9.5px] text-foreground/80 font-mono flex items-center gap-1">
            <CheckCircle2 className="size-3 text-accent shrink-0" />
            <span>Mailtrap SMTP Dispatch Active</span>
          </div>
        </div>
      </div>

      {toast && (
        <div className="text-[10px] text-accent bg-accent/10 border border-accent/20 rounded px-2.5 py-1 flex items-center justify-between">
          <span>{toast}</span>
          <span className="text-muted-foreground font-mono">200 OK</span>
        </div>
      )}

      <div className="flex items-center justify-between border-t border-border/40 pt-3 text-[10px] text-muted-foreground">
        <span>Backend: Node.js · Express · MongoDB</span>
        <span>Security: Stateless JWT · Bcrypt</span>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Talka Interactive Live Preview
// ----------------------------------------------------
function TalkaPreview() {
  const [latency, setLatency] = useState(18);
  const [room, setRoom] = useState<"general" | "engineering" | "announcements">("general");
  const [isTyping, setIsTyping] = useState(false);

  const handlePing = () => {
    playTechTrigger();
    setIsTyping(true);
    const newLat = Math.floor(Math.random() * 12) + 12;
    setLatency(newLat);
    setTimeout(() => {
      setIsTyping(false);
      playPillClick();
    }, 800);
  };

  return (
    <div className="flex h-full flex-col justify-between font-mono text-[11px] select-none p-5 sm:p-6 bg-surface/50">
      <div className="flex items-center justify-between border-b border-border/50 pb-3 text-[10.5px] text-muted-foreground">
        <span className="flex items-center gap-2 text-foreground font-medium tracking-wide">
          <span className="size-2 rounded-full bg-accent animate-pulse" />
          SOCKET.IO MULTIPLEXED ENGINE
        </span>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="text-accent font-semibold">{latency}ms latency</span>
          <span className="text-muted-foreground hidden sm:inline">· Heartbeat Active</span>
        </div>
      </div>

      {/* Room Tabs & Presence */}
      <div className="space-y-2 py-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {(["general", "engineering", "announcements"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => {
                  playPillClick();
                  setRoom(r);
                }}
                className={cn(
                  "px-2.5 py-1 rounded text-[10px] cursor-pointer transition-colors",
                  room === r ? "bg-accent text-accent-foreground font-semibold" : "bg-surface/80 text-muted-foreground hover:text-foreground",
                )}
              >
                #{r}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handlePing}
            className="inline-flex items-center gap-1 rounded bg-accent/10 hover:bg-accent text-accent hover:text-accent-foreground px-2 py-1 text-[10px] font-semibold transition-all cursor-pointer border border-accent/20"
          >
            <Radio className="size-2.5" />
            <span>Ping Socket</span>
          </button>
        </div>

        <div className="rounded-lg bg-background/60 p-3.5 border border-border/40 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span className="text-accent">ws://talka.live/rooms/{room}</span>
            <span>Zero Packet Loss</span>
          </div>
          <div className="text-[12px] font-sans text-foreground/90 pt-1">
            {isTyping ? (
              <span className="text-accent animate-pulse font-mono text-[11px]">
                ● Transmitting websocket frame across peer connection...
              </span>
            ) : (
              <span>Bidirectional socket pipeline with persistent Redux Toolkit synchronization.</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border/40 pt-3 text-[10px] text-muted-foreground">
        <span>Protocol: WebSocket &amp; HTTP Long-Polling</span>
        <span>Storage: Clustered MongoDB</span>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// E-Commerce Platform Interactive Live Preview
// ----------------------------------------------------
function EcommercePreview() {
  const [role, setRole] = useState<"customer" | "admin">("customer");
  const [stock, setStock] = useState(14);
  const [orderStatus, setOrderStatus] = useState<string | null>(null);

  const handleCheckoutSimulation = () => {
    if (stock <= 0) return;
    playTechTrigger();
    setStock((s) => s - 1);
    setOrderStatus(`PAYID-${Math.floor(Math.random() * 89999 + 10000)} · PayPal Captured`);
    setTimeout(() => {
      playPillClick();
    }, 400);
  };

  return (
    <div className="flex h-full flex-col justify-between font-mono text-[11px] select-none p-5 sm:p-6 bg-surface/50">
      <div className="flex items-center justify-between border-b border-border/50 pb-3 text-[10.5px] text-muted-foreground">
        <span className="flex items-center gap-2 text-foreground font-medium tracking-wide">
          <span className="size-2 rounded-full bg-accent" />
          ROLE-BASED COMMERCE &amp; PAYPAL PIPELINE
        </span>
        <div className="flex items-center gap-1 bg-surface/80 p-0.5 rounded border border-border/40">
          <button
            type="button"
            onClick={() => {
              playPillClick();
              setRole("customer");
            }}
            className={cn(
              "px-2 py-0.5 rounded text-[10px] cursor-pointer transition-colors",
              role === "customer" ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Storefront
          </button>
          <button
            type="button"
            onClick={() => {
              playPillClick();
              setRole("admin");
            }}
            className={cn(
              "px-2 py-0.5 rounded text-[10px] cursor-pointer transition-colors",
              role === "admin" ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Admin Guard
          </button>
        </div>
      </div>

      <div className="space-y-2 py-2">
        {role === "customer" ? (
          <div className="rounded-lg bg-background/60 p-3.5 border border-border/40 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[12.5px] font-sans font-semibold text-foreground">
                  Pro Mechanical Keyboard Prototype
                </span>
                <span className="text-[10px] text-muted-foreground block">
                  Available Inventory: <span className="text-accent font-bold">{stock} units</span>
                </span>
              </div>
              <button
                type="button"
                onClick={handleCheckoutSimulation}
                className="rounded-md bg-accent text-accent-foreground px-3 py-1.5 text-[10.5px] font-semibold transition-all hover:brightness-110 cursor-pointer"
              >
                Simulate PayPal Pay
              </button>
            </div>
            {orderStatus && (
              <div className="text-[10px] text-accent bg-accent/10 border border-accent/20 rounded px-2.5 py-1 flex items-center justify-between">
                <span>{orderStatus}</span>
                <span className="text-foreground">Stock Updated (-1)</span>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-lg bg-background/60 p-3.5 border border-border/40 space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-accent font-semibold">ROUTE GUARD: /admin/dashboard</span>
              <span className="text-muted-foreground">Admin Session Verified</span>
            </div>
            <p className="text-[12px] font-sans text-foreground/80 leading-relaxed pt-1">
              Real-time catalog CRUD operations, Cloudinary asset pipelines, and automated PayPal capture settlement logs.
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-border/40 pt-3 text-[10px] text-muted-foreground">
        <span>Cart Sync: Redux Toolkit Store</span>
        <span>Payment: PayPal REST SDK Webhooks</span>
      </div>
    </div>
  );
}

function TechnicalPreview({ project }: { project: Project }) {
  if (project.id === "connecthub") return <ConnectHubPreview />;
  if (project.id === "socialsphere") return <SocialSpherePreview />;
  if (project.id === "mini-linkedin") return <MiniLinkedInPreview />;
  if (project.id === "talka") return <TalkaPreview />;
  return <EcommercePreview />;
}

// Project Card Item with Clean Hierarchy & Expandable Deep-Dive Drawer
function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Take first 3 tech tags for clean presentation without badge noise
  const displayedTech = project.tech.slice(0, 3).join(" · ");

  return (
    <article className="border-b border-border/60 pb-10 sm:pb-12 last:border-b-0 last:pb-0">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Title, Impact Sentence, Clean Tech String, and Primary CTA */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <span className="mono-label text-[11px] text-muted-foreground block mb-2">
              {displayedTech}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {project.name}
            </h3>
          </div>

          <p className="text-[14.5px] leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>

          {/* Primary Action Links */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="link-editorial inline-flex items-center gap-1.5 text-sm font-semibold text-accent cursor-pointer"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="size-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="link-editorial inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                <Code2 className="size-4" />
                <span>Source Code</span>
              </a>
            )}

            {/* Deep Dive Toggle */}
            <button
              type="button"
              onClick={() => {
                playPillClick();
                setIsExpanded(!isExpanded);
              }}
              className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer ml-auto"
            >
              <span>{isExpanded ? "Hide Architecture" : "Technical Specs"}</span>
              {isExpanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
            </button>
          </div>

          {/* Expandable Technical Deep-Dive Details */}
          {isExpanded && (
            <div className="mt-5 space-y-4 rounded-xl border border-border/60 bg-surface/30 p-4 font-mono text-xs animate-in fade-in slide-in-from-top-2 duration-300">
              <div>
                <span className="text-[10px] uppercase text-muted-foreground tracking-wider block font-semibold">
                  Engineering Challenge
                </span>
                <p className="mt-1 font-sans text-xs text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="pt-3 border-t border-border/40">
                <span className="text-[10px] uppercase text-accent tracking-wider block font-semibold">
                  Architectural Solution
                </span>
                <p className="mt-1 font-sans text-xs text-foreground/85 leading-relaxed">
                  {project.solution}
                </p>
              </div>
              <div className="pt-3 border-t border-border/40 flex flex-wrap items-center gap-1 text-[10.5px]">
                <span className="text-muted-foreground mr-1 font-sans">Full Stack:</span>
                <span className="text-foreground/80">{project.tech.join(", ")}</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Large Clean Product Preview Viewport */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-border-strong min-h-[300px] sm:min-h-[330px]">
            <TechnicalPreview project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const fullstackCount = projects.length;
  const realtimeCount = projects.filter((p) => p.id === "connecthub" || p.id === "talka" || p.id === "socialsphere").length;

  const filteredProjects = projects.filter((p) => {
    // Category filter
    if (filter === "realtime" && !(p.id === "connecthub" || p.id === "talka" || p.id === "socialsphere")) {
      return false;
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchTagline = p.tagline.toLowerCase().includes(q);
      const matchTech = p.tech.some((t) => t.toLowerCase().includes(q));
      const matchProblem = p.problem.toLowerCase().includes(q);
      return matchName || matchTagline || matchTech || matchProblem;
    }

    return true;
  });

  return (
    <section
      id="projects"
      className="w-full scroll-mt-20 px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20"
    >
      <SectionHeading
        label="Selected Work"
        title="Production systems &amp; platforms."
        subtitle="Full-stack platforms and real-time architectures built with rigorous type safety, modular services, and fault tolerance."
      />

      {/* Understated Typographic Metric Strip */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-border/50">
        <div>
          <span className="mono-label text-[10.5px] text-muted-foreground block">Production Platforms</span>
          <span className="mt-1 font-display text-2xl font-bold text-foreground block">05 Shipped</span>
        </div>
        <div>
          <span className="mono-label text-[10.5px] text-muted-foreground block">Backend Core</span>
          <span className="mt-1 font-display text-2xl font-bold text-accent block">Spring · Node</span>
        </div>
        <div>
          <span className="mono-label text-[10.5px] text-muted-foreground block">Network Transport</span>
          <span className="mt-1 font-display text-2xl font-bold text-foreground block">STOMP · WS</span>
        </div>
        <div>
          <span className="mono-label text-[10.5px] text-muted-foreground block">Reliability</span>
          <span className="mt-1 font-display text-2xl font-bold text-accent block">TypeScript</span>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Minimal Editorial Filter Navigation */}
        <div className="flex items-center gap-6 border-b sm:border-b-0 border-border/40 pb-3 sm:pb-0 text-sm">
          {[
            { id: "all", label: "All Projects", count: projects.length },
            { id: "fullstack", label: "Full-Stack", count: fullstackCount },
            { id: "realtime", label: "Real-Time", count: realtimeCount },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                playPillClick();
                setFilter(tab.id as FilterType);
              }}
              className={cn(
                "group relative py-1 text-sm font-medium transition-colors cursor-pointer",
                filter === tab.id
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span>{tab.label}</span>
              <span className="ml-1.5 font-mono text-[11px] text-muted-foreground/70">({tab.count})</span>
              {filter === tab.id && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[220px] sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack or keywords..."
            className="w-full rounded-md border border-border/60 bg-surface/40 pl-8 pr-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Projects List */}
      <div className="mt-10 flex flex-col gap-10 sm:gap-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-border/60 rounded-xl">
            <p className="font-mono text-xs text-muted-foreground">
              No projects matching &quot;{searchQuery}&quot;. Try searching for &quot;Spring&quot;, &quot;React&quot;, &quot;MongoDB&quot; or &quot;WebSocket&quot;.
            </p>
          </div>
        ) : (
          filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))
        )}
      </div>
    </section>
  );
}
