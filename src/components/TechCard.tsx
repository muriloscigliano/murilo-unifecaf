import { Card, CardContent } from "./ui/card";
import type { LucideIcon } from "lucide-react";

interface TechCardProps {
  icon: LucideIcon;
  name: string;
  category: string;
}

export function TechCard({ icon: Icon, name, category }: TechCardProps) {
  if (!Icon || typeof Icon !== 'function') {
    return null;
  }
  
  return (
    <Card className="border border-[var(--border)]/60 bg-[var(--card)] transition-all hover:border-[var(--primary)]/30 hover:scale-[1.01] rounded-3xl group">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--muted)]/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--muted)]/70 transition-colors">
            {Icon && <Icon className="w-6 h-6 text-[var(--muted-foreground)] stroke-[1.5] group-hover:text-[var(--foreground)] transition-colors" />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-1.5 font-medium">
              {category || ''}
            </div>
            <h3 className="text-base font-semibold text-[var(--foreground)] leading-tight">
              {name || ''}
            </h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

