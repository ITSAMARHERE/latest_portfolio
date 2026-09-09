import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NamasteIntroProps {
  onComplete?: () => void;
  forcePlay?: boolean;
}

export function NamasteIntro({ onComplete, forcePlay = false }: NamasteIntroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState<"enter" | "namaste" | "hold" | "exit">("enter");

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Check session storage
    const hasSeenIntro =
      typeof window !== "undefined" &&
      sessionStorage.getItem("hasSeenNamasteIntro") === "true";

    if (!forcePlay && (prefersReducedMotion || hasSeenIntro)) {
      onComplete?.();
      return;
    }

    setIsVisible(true);

    // Sequence timings (total ~3.7s):
    // 0.0s -> 0.5s: enter (fade & scale in)
    // 0.5s -> 1.8s: namaste (hands join at chest, slight head bow, typography fades up)
    // 1.8s -> 2.9s: hold (appreciate gesture, radiant star aura)
    // 2.9s -> 3.7s: exit (fade & scale down, curtain reveal of portfolio)
    const t1 = setTimeout(() => setStep("namaste"), 500);
    const t2 = setTimeout(() => setStep("hold"), 1800);
    const t3 = setTimeout(() => setStep("exit"), 2900);
    const t4 = setTimeout(() => {
      setIsVisible(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("hasSeenNamasteIntro", "true");
      }
      onComplete?.();
    }, 3700);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        setIsVisible(false);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("hasSeenNamasteIntro", "true");
        }
        onComplete?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [forcePlay, onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasSeenNamasteIntro", "true");
    }
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="namaste-splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background select-none overflow-hidden"
          style={{ pointerEvents: "all" }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: step === "namaste" || step === "hold" ? [1, 1.3, 1.15] : 1,
                opacity: step === "namaste" || step === "hold" ? 0.4 : 0.15,
              }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="size-[28rem] rounded-full bg-accent/20 blur-3xl"
            />
          </div>

          {/* Top Skip Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute top-6 right-6 z-10"
          >
            <button
              type="button"
              onClick={handleSkip}
              className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/70 px-4 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-accent/40 backdrop-blur-md transition-all cursor-pointer shadow-sm"
              title="Skip intro animation (Esc)"
            >
              <span>Skip Intro</span>
              <kbd className="text-[10px] text-muted-foreground/70 bg-foreground/5 px-1.5 py-0.5 rounded border border-border/60">
                ESC
              </kbd>
            </button>
          </motion.div>

          {/* Central Character & Greeting Stage */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 16 }}
            animate={{
              scale: step === "exit" ? 0.94 : 1,
              opacity: step === "exit" ? 0 : 1,
              y: step === "exit" ? -14 : 0,
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center justify-center px-4"
          >
            {/* Custom Minimal Vector Namaste Character */}
            <div className="relative size-60 sm:size-72 flex items-center justify-center">
              <svg
                viewBox="0 0 240 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-md"
              >
                {/* Aura Ring behind character */}
                <motion.circle
                  cx="120"
                  cy="120"
                  r="78"
                  className="stroke-accent/25 dark:stroke-accent/35"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  initial={{ rotate: 0, scale: 0.9, opacity: 0 }}
                  animate={{
                    rotate: 360,
                    scale: step === "namaste" || step === "hold" ? 1.06 : 0.95,
                    opacity: step === "namaste" || step === "hold" ? 0.85 : 0.2,
                  }}
                  transition={{
                    rotate: { duration: 24, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.2 },
                    opacity: { duration: 0.7 },
                  }}
                />

                {/* Torso / Kurta / Tunic */}
                <motion.g
                  initial={{ y: 0 }}
                  animate={{
                    y: step === "namaste" || step === "hold" ? 3.5 : 0,
                  }}
                  transition={{ duration: 0.9, ease: [0.34, 1.4, 0.64, 1] }}
                >
                  {/* Shoulders & Body */}
                  <path
                    d="M68 155 C68 135, 95 125, 120 125 C145 125, 172 135, 172 155 L182 245 C182 250, 178 255, 172 255 L68 255 C62 255, 58 250, 58 245 Z"
                    className="fill-surface stroke-border-strong text-foreground"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  {/* Clean Minimalist Mandarin Collar */}
                  <path
                    d="M102 126 C102 140, 138 140, 138 126"
                    className="stroke-accent"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="120"
                    y1="138"
                    x2="120"
                    y2="200"
                    className="stroke-border-strong"
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                  />
                </motion.g>

                {/* Head & Neck (with slight bowing animation) */}
                <motion.g
                  initial={{ y: 0, rotate: 0 }}
                  animate={{
                    y: step === "namaste" || step === "hold" ? 5.5 : 0,
                    rotate: step === "namaste" || step === "hold" ? 2.5 : 0,
                  }}
                  transition={{ duration: 0.9, ease: [0.34, 1.4, 0.64, 1] }}
                  style={{ transformOrigin: "120px 120px" }}
                >
                  {/* Neck */}
                  <path
                    d="M110 108 L110 128 C110 131, 130 131, 130 128 L130 108 Z"
                    className="fill-surface stroke-border-strong"
                    strokeWidth="2"
                  />

                  {/* Head Oval */}
                  <ellipse
                    cx="120"
                    cy="78"
                    rx="38"
                    ry="42"
                    className="fill-surface stroke-border-strong"
                    strokeWidth="2.5"
                  />

                  {/* Stylized Modern Hair Contour */}
                  <path
                    d="M82 74 C82 46, 102 38, 120 38 C140 38, 158 46, 158 74 C158 54, 142 45, 120 45 C98 45, 82 56, 82 74 Z"
                    className="fill-foreground/90 stroke-foreground/90"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M82 74 C88 62, 100 56, 120 56 C144 56, 156 64, 158 74"
                    className="stroke-foreground/90"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Friendly Smiling Arc Eyes */}
                  <path
                    d="M98 76 C102 83, 110 83, 114 76"
                    className="stroke-foreground"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M126 76 C130 83, 138 83, 142 76"
                    className="stroke-foreground"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />

                  {/* Gentle Cheerful Smile */}
                  <path
                    d="M111 93 C116 99, 124 99, 129 93"
                    className="stroke-accent"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />

                  {/* Eyebrows */}
                  <path
                    d="M98 67 C103 64, 110 65, 114 68"
                    className="stroke-foreground/50"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M126 68 C130 65, 137 64, 142 67"
                    className="stroke-foreground/50"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  {/* Subtle Cheeks blush */}
                  <circle cx="95" cy="85" r="4.5" className="fill-accent/30" />
                  <circle cx="145" cy="85" r="4.5" className="fill-accent/30" />
                </motion.g>

                {/* Left Arm & Palm */}
                <motion.g
                  initial={{ rotate: -25, x: -6, y: 10 }}
                  animate={{
                    rotate: step === "namaste" || step === "hold" ? 0 : -25,
                    x: step === "namaste" || step === "hold" ? 0 : -6,
                    y: step === "namaste" || step === "hold" ? 0 : 10,
                  }}
                  transition={{ duration: 1.0, ease: [0.34, 1.25, 0.64, 1] }}
                  style={{ transformOrigin: "68px 148px" }}
                >
                  {/* Left Arm Sleeve */}
                  <path
                    d="M68 148 C68 175, 96 170, 112 160"
                    className="stroke-border-strong fill-none"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  <path
                    d="M68 148 C68 175, 96 170, 112 160"
                    className="stroke-surface fill-none"
                    strokeWidth="9"
                    strokeLinecap="round"
                  />
                  {/* Left Hand / Palm pointing up */}
                  <path
                    d="M112 160 C114 154, 116 142, 118 136 C119 134, 120 135, 120 138 L120 162 Z"
                    className="fill-surface stroke-accent"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </motion.g>

                {/* Right Arm & Palm */}
                <motion.g
                  initial={{ rotate: 25, x: 6, y: 10 }}
                  animate={{
                    rotate: step === "namaste" || step === "hold" ? 0 : 25,
                    x: step === "namaste" || step === "hold" ? 0 : 6,
                    y: step === "namaste" || step === "hold" ? 0 : 10,
                  }}
                  transition={{ duration: 1.0, ease: [0.34, 1.25, 0.64, 1] }}
                  style={{ transformOrigin: "172px 148px" }}
                >
                  {/* Right Arm Sleeve */}
                  <path
                    d="M172 148 C172 175, 144 170, 128 160"
                    className="stroke-border-strong fill-none"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  <path
                    d="M172 148 C172 175, 144 170, 128 160"
                    className="stroke-surface fill-none"
                    strokeWidth="9"
                    strokeLinecap="round"
                  />
                  {/* Right Hand / Palm pointing up (pressed against left hand) */}
                  <path
                    d="M128 160 C126 154, 124 142, 122 136 C121 134, 120 135, 120 138 L120 162 Z"
                    className="fill-surface stroke-accent"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </motion.g>

                {/* Radiant Anjali Mudra Sparkle / Halo at Palms */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: step === "namaste" || step === "hold" ? [0, 1.35, 1] : 0,
                    opacity: step === "namaste" || step === "hold" ? [0, 1, 0.95] : 0,
                  }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  style={{ transformOrigin: "120px 138px" }}
                >
                  <circle cx="120" cy="138" r="18" className="fill-accent/20 blur-xs" />
                  {/* Golden Sparkle Cross */}
                  <path
                    d="M120 122 L122.5 135.5 L136 138 L122.5 140.5 L120 154 L117.5 140.5 L104 138 L117.5 135.5 Z"
                    className="fill-accent"
                  />
                </motion.g>
              </svg>
            </div>

            {/* Typography & Welcome Text */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{
                opacity: step === "namaste" || step === "hold" ? 1 : 0,
                y: step === "namaste" || step === "hold" ? 0 : 8,
              }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 flex flex-col items-center text-center space-y-2"
            >
              {/* Hindi Namaste Script */}
              <div className="flex items-center gap-2.5">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground tracking-wide">
                  नमस्ते
                </span>
                <span className="text-accent text-2xl">✦</span>
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-light italic text-accent">
                  Namaste
                </span>
              </div>

              {/* Subtitle Telemetry */}
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground pt-1">
                <span>Welcome to Amar Pal&apos;s Portfolio</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Progress Bar Indicator */}
          <div className="absolute bottom-8 inset-x-0 max-w-xs mx-auto px-6">
            <div className="h-0.5 w-full bg-border/60 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.7, ease: "linear" }}
                className="h-full bg-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
