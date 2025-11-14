import type { LucideIcon } from "lucide-react";

interface PromptNodeProps {
  icon: LucideIcon;
  name: string;
  description: string;
  usage: string;
  path?: "good" | "bad" | "router";
}

export function PromptNode({ icon: Icon, name, description, usage, path }: PromptNodeProps) {
  const pathColors = {
    good: "border-green-500/30 bg-green-500/5",
    bad: "border-orange-500/30 bg-orange-500/5",
    router: "border-blue-500/30 bg-blue-500/5",
  };

  return (
    <div
      className={`p-6 rounded-3xl border-2 transition-all hover:scale-[1.02] ${
        path ? pathColors[path] : "border-[var(--border)] bg-[var(--card)]"
      }`}
    >
      <div className="flex items-start gap-5">
        <Icon className="w-7 h-7 text-[var(--muted-foreground)] stroke-[1.5] flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-semibold mb-2 text-base">{name}</h4>
          <p className="text-sm text-[var(--muted-foreground)] mb-3 leading-relaxed">
            {description}
          </p>
          <div className="text-xs text-[var(--muted-foreground)] font-mono bg-[var(--muted)]/30 px-3 py-1.5 rounded-xl inline-block">
            {usage}
          </div>
        </div>
      </div>
    </div>
  );
}

interface PromptTreeProps {
  title: string;
  prompts: PromptNodeProps[];
}

export function PromptTree({ title, prompts }: PromptTreeProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        {prompts.map((prompt, index) => (
          <div key={index} className="flex items-start gap-2">
            {index < prompts.length - 1 && (
              <div className="w-px h-8 bg-[var(--border)] ml-3 mt-1"></div>
            )}
            <div className="flex-1">
              <PromptNode {...prompt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

