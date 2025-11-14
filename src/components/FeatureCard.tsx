import { Card, CardContent } from "./ui/card";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border border-[var(--border)]/60 bg-[var(--card)] transition-all hover:border-[var(--primary)]/30 hover:scale-[1.01] rounded-3xl">
      <CardContent className="p-8">
        <Icon className="w-10 h-10 mb-5 text-[var(--muted-foreground)] stroke-[1.5]" />
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

