import { ArrowUpRight, Github, Linkedin, FileText, Send, Mail } from "lucide-react";
import { contact, profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { openContactModal } from "./ContactModal";

export function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="w-full scroll-mt-20 px-4 sm:px-6 md:px-8 lg:px-10 pb-12 pt-16 sm:pt-20 border-t border-border/50"
    >
      <SectionHeading
        label="Direct Dialogue"
        title="Let's build something remarkable."
        subtitle="Open for engineering roles, technical consultations, and high-impact distributed systems collaboration."
      />

      <div className="mt-10 sm:mt-12 grid gap-10 sm:gap-12 lg:grid-cols-12">
        {/* Left Side: Editorial Note, Query Button, and Direct Email */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8">
          <Reveal>
            <p className="max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
              {contact.note}
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={() => openContactModal()}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_0_24px_rgba(var(--accent),0.25)] hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer w-full sm:w-auto"
              >
                <Send className="size-4" />
                <span>Open Inquiry Box</span>
              </button>

              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-all duration-200 w-full sm:w-auto"
              >
                <Mail className="size-4 text-muted-foreground" />
                <span>{contact.email}</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Connections List */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <Reveal delay={80} className="flex flex-col gap-6">
            <span className="mono-label text-[11px] text-foreground font-semibold border-b border-border/60 pb-3">
              Connections &amp; Links
            </span>
            <ul className="flex flex-col gap-4">
              {contact.github && (
                <li>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-3 text-[14.5px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="size-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              )}
              {contact.linkedin && (
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-3 text-[14.5px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="size-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              )}
              {contact.resume && (
                <li>
                  <a
                    href={contact.resume}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-3 text-[14.5px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FileText className="size-4" />
                    <span>Curriculum Vitae</span>
                    <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Footer Copyright & Telemetry */}
      <div className="mt-14 sm:mt-16 flex flex-col gap-4 border-t border-border/50 pt-8 sm:flex-row sm:items-center sm:justify-between font-mono text-[11px] text-muted-foreground">
        <div>
          <span>
            © {currentYear} {profile.name}. Designed with care &amp; precision.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("replay-namaste-intro"))}
            className="hover:text-accent transition-colors cursor-pointer inline-flex items-center gap-1"
          >
            <span>Replay Greeting</span>
            <span className="text-accent">✦</span>
          </button>
          <span>LOCATION: {profile.location.toUpperCase()}</span>
          <span>TIMEZONE: IST (UTC+5:30)</span>
        </div>
      </div>
    </footer>
  );
}
