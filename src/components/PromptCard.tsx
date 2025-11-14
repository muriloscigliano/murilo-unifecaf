import { Card, CardContent } from "./ui/card";
import type { LucideIcon } from "lucide-react";

interface PromptCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  systemMessagePreview: string;
  userMessagePreview: string;
  usage: string;
  path?: "good" | "bad" | "router" | "core" | "behavioral" | "functional" | "technical";
}

const pathColors = {
  good: "border-green-500/15 bg-green-500/2",
  bad: "border-orange-500/15 bg-orange-500/2",
  router: "border-blue-500/15 bg-blue-500/2",
  core: "border-purple-500/15 bg-purple-500/2",
  behavioral: "border-pink-500/15 bg-pink-500/2",
  functional: "border-cyan-500/15 bg-cyan-500/2",
  technical: "border-indigo-500/15 bg-indigo-500/2",
};

export function PromptCard({
  icon: Icon,
  title,
  description,
  systemMessagePreview,
  userMessagePreview,
  usage,
  path,
}: PromptCardProps) {
  return (
    <Card
      className={`rounded-3xl border transition-all hover:scale-[1.01] ${
        path ? pathColors[path] : "border-[var(--border)] bg-[var(--card)]"
      }`}
    >
      <CardContent className="p-7">
        <div className="flex items-start gap-5 mb-5">
          <Icon className="w-8 h-8 text-[var(--muted-foreground)] stroke-[1.5] flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[var(--muted-foreground)] mb-3 leading-relaxed">
              {description}
            </p>
            <div className="text-xs text-[var(--muted-foreground)] font-mono bg-[var(--muted)]/50 px-3 py-1.5 rounded-lg inline-block mb-4">
              {usage}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[var(--muted)]/40 border border-[var(--border)]/50">
            <div className="text-sm font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wide">
              System Message
            </div>
            <p className="text-[16px] text-[var(--muted-foreground)] leading-relaxed line-clamp-3">
              {systemMessagePreview}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--muted)]/40 border border-[var(--border)]/50">
            <div className="text-sm font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wide">
              User Message Template
            </div>
            <p className="text-[16px] text-[var(--muted-foreground)] leading-relaxed line-clamp-2 font-mono">
              {userMessagePreview}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

