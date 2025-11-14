import { Github, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]/60 bg-[var(--background)]">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-[var(--muted-foreground)]">
            <p>
              © 2025 <strong className="text-[var(--foreground)]">Murilo Scigliano</strong> | Are You Human? Studio
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/muriloscigliano/areyouhuman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <Github className="w-4 h-4 stroke-[1.5]" />
              <span>GitHub</span>
            </a>
            <a
              href="https://areyouhuman-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <ExternalLink className="w-4 h-4 stroke-[1.5]" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

