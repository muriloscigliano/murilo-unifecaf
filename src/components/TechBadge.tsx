interface TechBadgeProps {
  name: string;
  category?: "platform" | "ai" | "service" | "database";
}

const categoryColors = {
  platform: "bg-gradient-to-r from-purple-500 to-pink-500",
  ai: "bg-gradient-to-r from-orange-500 to-red-500",
  service: "bg-gradient-to-r from-blue-500 to-cyan-500",
  database: "bg-gradient-to-r from-green-500 to-emerald-500",
};

export function TechBadge({ name, category = "platform" }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white ${categoryColors[category]}`}
    >
      {name}
    </span>
  );
}

