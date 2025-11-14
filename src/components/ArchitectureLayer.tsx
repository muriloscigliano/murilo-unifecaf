import type { LucideIcon } from "lucide-react";

interface ArchitectureLayerProps {
  icon: LucideIcon;
  title: string;
  description: string;
  components: string[];
  color: "blue" | "purple" | "orange" | "green" | "cyan";
}

const colorStyles = {
  blue: "from-blue-500/10 to-blue-600/10 border-blue-500/20",
  purple: "from-purple-500/10 to-purple-600/10 border-purple-500/20",
  orange: "from-orange-500/10 to-orange-600/10 border-orange-500/20",
  green: "from-green-500/10 to-green-600/10 border-green-500/20",
  cyan: "from-cyan-500/10 to-cyan-600/10 border-cyan-500/20",
};

export function ArchitectureLayer({
  icon: Icon,
  title,
  description,
  components,
  color,
}: ArchitectureLayerProps) {
  return (
    <div
      className={`p-8 rounded-3xl bg-gradient-to-br ${colorStyles[color]} border-2 transition-all hover:scale-[1.02]`}
    >
      <Icon className="w-12 h-12 mb-5 text-[var(--muted-foreground)] stroke-[1.5]" />
      <h3 className="font-semibold mb-3 text-lg">{title}</h3>
      <p className="text-sm text-[var(--muted-foreground)] mb-5 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {components.map((component) => (
          <li
            key={component}
            className="text-xs text-[var(--muted-foreground)] flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"></span>
            <span>{component}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

