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
  good: "border-green-500/30 bg-green-500/5",
  bad: "border-orange-500/30 bg-orange-500/5",
  router: "border-blue-500/30 bg-blue-500/5",
  core: "border-purple-500/30 bg-purple-500/5",
  behavioral: "border-pink-500/30 bg-pink-500/5",
  functional: "border-cyan-500/30 bg-cyan-500/5",
  technical: "border-indigo-500/30 bg-indigo-500/5",
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
      className={`rounded-3xl border-2 transition-all hover:scale-[1.02] ${
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
            <div className="text-xs text-[var(--muted-foreground)] font-mono bg-[var(--muted)]/30 px-3 py-1.5 rounded-xl inline-block mb-4">
              {usage}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-[var(--muted)]/20 border border-[var(--border)]">
            <div className="text-xs font-semibold text-[var(--primary)] mb-2 uppercase tracking-wide">
              System Message
            </div>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-3">
              {systemMessagePreview}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--muted)]/20 border border-[var(--border)]">
            <div className="text-xs font-semibold text-[var(--primary)] mb-2 uppercase tracking-wide">
              User Message Template
            </div>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-2 font-mono">
              {userMessagePreview}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

