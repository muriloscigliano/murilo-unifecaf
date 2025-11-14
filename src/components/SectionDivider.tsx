export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"></div>
      <div className="mx-4 w-2 h-2 rounded-full bg-[var(--primary)]/20"></div>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"></div>
    </div>
  );
}

