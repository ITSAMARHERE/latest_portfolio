import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { CommandPalette } from "./CommandPalette";
import { ThemeToggle } from "./ThemeToggle";
import { openContactModal } from "./ContactModal";
import { playPillClick } from "@/lib/audio";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleMobileNavClick = (id: string) => {
    playPillClick();
    setMobileMenuOpen(false);
    setTimeout(() => scrollToId(id), 100);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-400",
          scrolled
            ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-xs"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="flex h-18 w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12"
        >
          {/* Brand Signature */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Amar Pal"
            className="group flex items-center gap-3 transition-opacity duration-200 hover:opacity-85 shrink-0"
          >
            <img
              src="/favicon.png"
              alt="Amar Pal"
              className="size-8 rounded-full object-cover border border-border/70"
            />
            <div className="flex flex-col">
              <span className="font-display text-base font-semibold tracking-tight text-foreground">
                Amar Pal
              </span>
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                Software &amp; ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(item.id);
                  }}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "relative text-[13.5px] transition-colors duration-200 link-editorial",
                    active === item.id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions: Let's Talk CTA + Theme Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openContactModal()}
              className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-foreground text-background px-4.5 py-2 text-xs font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => {
                playPillClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex items-center justify-center size-9 rounded-full border border-border bg-surface text-foreground hover:border-border-strong transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {/* Scroll indicator bar */}
        <div
          aria-hidden
          className="h-[1px] origin-left bg-accent/60 transition-transform duration-100"
          style={{ transform: `scaleX(${progress})` }}
        />

        {/* Mobile Dropdown Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-b border-border bg-background/98 backdrop-blur-2xl px-6 py-6 shadow-xl"
            >
              <ul className="flex flex-col gap-2 text-sm">
                {nav.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleMobileNavClick(item.id)}
                      className={cn(
                        "w-full flex items-center justify-between py-2 px-3 rounded-lg text-left transition-colors cursor-pointer",
                        active === item.id
                          ? "bg-accent-soft text-accent font-semibold"
                          : "text-foreground/90 hover:bg-surface",
                      )}
                    >
                      <span className="font-display text-base">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>Amar Pal · Kolkata, India</span>
                <span className="text-accent">Available for select projects</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CommandPalette open={cmdOpen} setOpen={setCmdOpen} />
    </>
  );
}
