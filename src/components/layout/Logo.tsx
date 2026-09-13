import { COMPANY } from '../../data/company';
import { cn } from '../../utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <a href="#home" className={cn('inline-flex items-center gap-2.5', className)} aria-label={COMPANY.name}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent" fill="currentColor" aria-hidden>
          <path d="M4 18V6l8 7 8-7v12h-3.2v-6.8L12 15.2 7.2 11.2V18H4z" />
        </svg>
      </span>
      {showText ? (
        <span className="font-display text-lg font-semibold tracking-tight text-text">
          {COMPANY.name}
        </span>
      ) : null}
    </a>
  );
}
