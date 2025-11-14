import type { LucideIcon } from "lucide-react";

interface IconWrapperProps {
  icon: LucideIcon;
  className?: string;
}

export function IconWrapper({ icon: Icon, className }: IconWrapperProps) {
  if (!Icon || typeof Icon !== 'function') {
    return null;
  }
  return <Icon className={className} />;
}

