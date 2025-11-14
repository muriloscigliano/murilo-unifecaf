import type { LucideIcon } from "lucide-react";

interface PromptTechniqueProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function PromptTechnique({ title, description, icon: Icon }: PromptTechniqueProps) {
  return (
    <div className="p-7 rounded-3xl bg-[var(--card)] border-2 border-[var(--border)] hover:border-[var(--primary)] transition-all hover:scale-[1.02]">
      <div className="flex items-start gap-5">
        <Icon className="w-7 h-7 flex-shrink-0 text-[var(--muted-foreground)] stroke-[1.5] mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold mb-3 text-base">{title}</h3>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

