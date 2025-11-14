import type { LucideIcon } from "lucide-react";

interface ValuePropositionProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValueProposition({ icon: Icon, title, description }: ValuePropositionProps) {
  return (
    <div className="text-center p-8">
      <Icon className="w-14 h-14 mb-5 mx-auto text-[var(--muted-foreground)] stroke-[1.5]" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-[var(--muted-foreground)] text-sm leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}

