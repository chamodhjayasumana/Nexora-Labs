import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { ProjectStatus } from '../../types';
import { cn } from '../../utils';

const statusStyles: Record<ProjectStatus, string> = {
  'Real Project': 'border-success/40 bg-success/10 text-success',
  Concept: 'border-accent/40 bg-accent/10 text-accent',
  Experimental: 'border-blue/40 bg-blue/10 text-blue',
};

const statusLabels: Record<ProjectStatus, string> = {
  'Real Project': 'Live Project',
  Concept: 'Concept',
  Experimental: 'Lab Project',
};

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
  label?: string;
}

export function StatusBadge({ status, className, label }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]',
        statusStyles[status],
        className,
      )}
    >
      {label ?? statusLabels[status]}
    </span>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
}

export function MagneticButton({
  children,
  href,
  to,
  onClick,
  className,
}: MagneticButtonProps) {
  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleLeave = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  const classes = cn(
    'inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform duration-150 will-change-transform',
    className,
  );

  const shared = {
    className: classes,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
  };

  if (to) {
    return (
      <Link to={to} {...shared}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} {...shared}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...shared}>
      {children}
    </button>
  );
}

interface PerspectiveTiltProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function PerspectiveTilt({ children, className, intensity = 8 }: PerspectiveTiltProps) {
  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * intensity;
    const rotateX = (0.5 - py) * intensity;
    el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const onLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = 'perspective(1200px) rotateX(4deg) rotateY(-6deg)';
  };

  return (
    <div
      className={cn('transition-transform duration-200 ease-out will-change-transform', className)}
      style={{ transform: 'perspective(1200px) rotateX(4deg) rotateY(-6deg)' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

export function CursorSpotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const parent = node?.parentElement;
    if (!node || !parent) return;

    const onMove = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      node.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
      node.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
    };

    parent.addEventListener('mousemove', onMove, { passive: true });
    return () => parent.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
        className,
      )}
      style={{
        background:
          'radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(249,115,22,0.12), transparent 45%)',
      }}
    />
  );
}

export function GiantTypography({ text }: { text: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden select-none"
    >
      <p className="whitespace-nowrap text-center font-display text-[18vw] font-semibold leading-none tracking-tight text-white/[0.03]">
        {text}
      </p>
    </div>
  );
}

interface BrowserChromeProps {
  children: ReactNode;
  url?: string;
  className?: string;
}

export function BrowserChrome({
  children,
  url = 'yourbusiness.com',
  className,
}: BrowserChromeProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-border bg-bg shadow-2xl shadow-black/40',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-bg-secondary px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 truncate rounded-md bg-bg px-2 py-1 text-[10px] text-muted sm:text-xs">
          {url}
        </span>
      </div>
      <div className="bg-card">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'relative mx-auto w-[260px] rounded-[2rem] border border-border bg-bg p-2 shadow-2xl sm:w-[280px]',
        className,
      )}
    >
      <div className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/10" />
      <div className="overflow-hidden rounded-[1.6rem] border border-border bg-bg-secondary">
        {children}
      </div>
    </div>
  );
}
