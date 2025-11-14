import type { LucideIcon } from "lucide-react";

interface IconWrapperProps {
  icon: LucideIcon;
  className?: string;
}

export function IconWrapper({ icon: Icon, className }: IconWrapperProps) {
  if (!Icon) {
    return <span className={className}></span>;
  }
  
  try {
    return <Icon className={className} />;
  } catch {
    return <span className={className}></span>;
  }
}
