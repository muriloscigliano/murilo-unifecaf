import type { LucideIcon } from "lucide-react";

interface WorkflowStepProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "good" | "bad" | "default";
}

const variantStyles = {
  good: "border-[var(--border)] bg-[var(--card)]",
  bad: "border-[var(--border)] bg-[var(--card)]",
  default: "border-[var(--border)] bg-[var(--card)]",
};

export function WorkflowStep({
  number,
  icon: Icon,
  title,
  description,
  variant = "default",
}: WorkflowStepProps) {
  return (
    <div
      className={`p-7 rounded-3xl border-2 ${variantStyles[variant]} transition-all hover:scale-[1.02]`}
    >
      <div className="flex items-start gap-5">
        <Icon className="w-7 h-7 flex-shrink-0 text-[var(--muted-foreground)] stroke-[1.5] mt-0.5" />
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm font-mono text-[var(--muted-foreground)] bg-[var(--muted)]/30 px-2 py-1 rounded-lg">
              {number}
            </span>
            <h3 className="font-semibold text-base">{title}</h3>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

