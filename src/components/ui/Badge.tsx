import type { ReactNode } from 'react';
import { cn } from '../../utils';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'accent' | 'success' | 'blue';
}

const variants = {
  default: 'border-border bg-white/5 text-muted',
  accent: 'border-accent/30 bg-accent/10 text-accent',
  success: 'border-success/30 bg-success/10 text-success',
  blue: 'border-blue/30 bg-blue/10 text-blue',
};

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase sm:text-sm',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
