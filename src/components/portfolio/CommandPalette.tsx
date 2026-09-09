import { useEffect, useState } from "react";
import {
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sparkles,
  Layers,
  Cpu,
  Compass,
  Check,
  ExternalLink,
  Moon,
  Sun,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { contact, projects, featuredProject } from "@/data/portfolio";
import { openContactModal } from "./ContactModal";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1200);
  };

  const handleNavigate = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 120);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command, project name, or search..." />
      <CommandList className="max-h-[380px] p-2">
        <CommandEmpty>No results found.</CommandEmpty>

        {/* Quick Navigation */}
        <CommandGroup heading="Quick Navigation">
          <CommandItem
            onSelect={() => handleNavigate("top")}
            className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
          >
            <Compass className="size-4 text-accent" />
            <span>Home / Hero</span>
          </CommandItem>
          <CommandItem
            onSelect={() => handleNavigate("about")}
            className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
          >
            <Sparkles className="size-4 text-accent" />
            <span>01 / About Amar</span>
          </CommandItem>
          <CommandItem
            onSelect={() => handleNavigate("experience")}
            className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
          >
            <Layers className="size-4 text-accent" />
            <span>02 / Work Experience</span>
          </CommandItem>
          <CommandItem
            onSelect={() => handleNavigate("projects")}
            className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
          >
            <FolderGit2 className="size-4 text-accent" />
            <span>03 / Projects &amp; Systems</span>
          </CommandItem>
          <CommandItem
            onSelect={() => handleNavigate("skills")}
            className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
          >
            <Cpu className="size-4 text-accent" />
            <span>04 / Technical Toolkit</span>
          </CommandItem>
          <CommandItem
            onSelect={() => handleNavigate("contact")}
            className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
          >
            <Mail className="size-4 text-accent" />
            <span>06 / Contact &amp; Socials</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator className="my-2" />

        {/* Projects Search */}
        <CommandGroup heading="Projects &amp; Systems">
          <CommandItem
            onSelect={() => handleNavigate("projects")}
            className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
          >
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[10px] text-accent">FEATURED</span>
              <span className="font-medium">{featuredProject.name}</span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              {featuredProject.tech[0]} · {featuredProject.tech[1]}
            </span>
          </CommandItem>
          {projects.map((proj) => (
            <CommandItem
              key={proj.id}
              onSelect={() => handleNavigate("projects")}
              className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[10px] text-muted-foreground">{proj.index}</span>
                <span className="font-medium">{proj.name}</span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                {proj.tech[0]} · {proj.tech[1]}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator className="my-2" />

        {/* Quick Actions */}
        <CommandGroup heading="Quick Actions">
          <CommandItem
            onSelect={() => {
              setOpen(false);
              setTimeout(() => openContactModal(), 100);
            }}
            className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="size-4 text-accent" />
              <span className="font-semibold text-foreground">Send Message / Direct Query Box (Let&apos;s Talk)</span>
            </div>
            <span className="font-mono text-[10px] text-accent font-semibold">DIRECT INBOX</span>
          </CommandItem>
          <CommandItem
            onSelect={handleCopyEmail}
            className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
          >
            <div className="flex items-center gap-2.5">
              {copied ? (
                <Check className="size-4 text-accent" />
              ) : (
                <Mail className="size-4 text-muted-foreground" />
              )}
              <span>{copied ? "Copied to clipboard!" : `Copy Email (${contact.email})`}</span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">Copy</span>
          </CommandItem>
          {contact.github && (
            <CommandItem
              onSelect={() => {
                window.open(contact.github, "_blank", "noreferrer,noopener");
                setOpen(false);
              }}
              className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
            >
              <div className="flex items-center gap-2.5">
                <Github className="size-4 text-muted-foreground" />
                <span>Open GitHub Profile</span>
              </div>
              <ExternalLink className="size-3 text-muted-foreground" />
            </CommandItem>
          )}
          {contact.linkedin && (
            <CommandItem
              onSelect={() => {
                window.open(contact.linkedin, "_blank", "noreferrer,noopener");
                setOpen(false);
              }}
              className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="size-4 text-muted-foreground" />
                <span>Open LinkedIn Profile</span>
              </div>
              <ExternalLink className="size-3 text-muted-foreground" />
            </CommandItem>
          )}
          {contact.resume && (
            <CommandItem
              onSelect={() => {
                window.open(contact.resume, "_blank", "noreferrer,noopener");
                setOpen(false);
              }}
              className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="size-4 text-muted-foreground" />
                <span>View Curriculum Vitae</span>
              </div>
              <ExternalLink className="size-3 text-muted-foreground" />
            </CommandItem>
          )}

          {/* Theme Toggle in Command Palette */}
          <CommandItem
            onSelect={() => {
              const current = document.documentElement.classList.contains("light")
                ? "light"
                : "dark";
              const next = current === "dark" ? "light" : "dark";
              localStorage.setItem("theme", next);
              document.documentElement.classList.remove("dark", "light");
              document.documentElement.classList.add(next);
              setOpen(false);
            }}
            className="flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md hover:bg-surface/80"
          >
            <div className="flex items-center gap-2.5">
              <Sun className="size-4 text-accent" />
              <span>Toggle Dark / Light Theme</span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">Theme</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
