interface TechTableProps {
  category: string;
  technologies: string[];
  description?: string;
}

export function TechTable({ category, technologies, description }: TechTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--border)]/60 bg-[var(--card)]">
      <div className="border-b border-[var(--border)]/60 bg-[var(--muted)]/40 px-8 py-5">
        <h3 className="font-semibold text-lg">{category}</h3>
        {description && (
          <p className="text-sm text-[var(--muted-foreground)] mt-2 leading-relaxed">{description}</p>
        )}
      </div>
      <div className="p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[var(--muted)]/40 border border-[var(--border)]/50 hover:bg-[var(--muted)]/60 transition-colors"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] flex-shrink-0"></div>
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

