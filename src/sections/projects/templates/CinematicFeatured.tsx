import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../../types';
import {
  BrowserChrome,
  CursorSpotlight,
  GiantTypography,
  MagneticButton,
  PerspectiveTilt,
  StatusBadge,
} from '../../../components/creative/CreativePrimitives';

interface Props {
  project: Project;
}

export function CinematicFeatured({ project }: Props) {
  return (
    <article
      id={`project-${project.id}`}
      className="group relative overflow-hidden border-y border-border py-20 sm:py-28"
    >
      <CursorSpotlight />
      <GiantTypography text="BUILD" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} label="Featured Concept" />
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              {project.category}
            </span>
          </div>
          <h3 className="font-display text-5xl font-semibold tracking-tight text-text sm:text-6xl lg:text-7xl">
            {project.shortTitle}
          </h3>
          <p className="mt-4 text-xl text-muted sm:text-2xl">{project.description.split('.')[0]}.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {(project.tags ?? [project.location, project.industry].filter(Boolean)).map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            {project.solution}
          </p>
          <div className="mt-8">
            <MagneticButton to={`/work/${project.id}`}>Explore Case Study
                <ArrowUpRight className="h-4 w-4" /></MagneticButton>
          </div>
        </div>

        <div className="relative">
          <FloatingCard
            className="absolute -left-2 top-6 z-20 hidden sm:block lg:-left-8"
            title="New Roofing Lead"
            delay={0}
          />
          <FloatingCard
            className="absolute -right-1 top-20 z-20 hidden md:block lg:-right-6"
            title="Storm Detected"
            subtitle="Travis County"
            delay={0.1}
          />
          <FloatingCard
            className="absolute bottom-24 -left-4 z-20 hidden lg:block"
            title="Estimate Generated"
            subtitle="$12.5K–$16.8K"
            delay={0.2}
          />
          <FloatingCard
            className="absolute -right-2 bottom-10 z-20 hidden sm:block"
            title="Inspection Booked ✓"
            delay={0.3}
          />

          <svg
            className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full opacity-40 lg:block"
            aria-hidden
          >
            <line x1="18%" y1="18%" x2="42%" y2="35%" stroke="rgba(249,115,22,0.35)" strokeWidth="1" />
            <line x1="82%" y1="28%" x2="62%" y2="40%" stroke="rgba(59,130,246,0.35)" strokeWidth="1" />
            <line x1="20%" y1="72%" x2="40%" y2="58%" stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
          </svg>

          <PerspectiveTilt>
            <BrowserChrome url="apexshield.demo / home">
              <div className="space-y-3 bg-gradient-to-br from-bg-secondary to-bg p-4 sm:p-5">
                <div className="rounded-xl border border-border bg-card p-3">
                  <p className="text-[10px] uppercase tracking-wider text-accent">Satellite Lookup</p>
                  <div className="mt-2 h-20 rounded-lg bg-[radial-gradient(circle_at_30%_40%,#334155, #0f172a)] relative overflow-hidden">
                    <div className="absolute inset-4 rounded border border-dashed border-accent/40" />
                    <p className="absolute bottom-2 left-2 text-[10px] text-muted">Roof facets detected</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <MiniWidget label="Instant Estimate" value="$12.5–16.8K" />
                  <MiniWidget label="Storm Alert" value="Active" accent />
                  <MiniWidget label="Financing" value="From $189/mo" />
                  <MiniWidget label="Lead Ping" value="SMS Sent" />
                </div>
              </div>
            </BrowserChrome>
          </PerspectiveTilt>
        </div>
      </div>
    </article>
  );
}

function MiniWidget({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <p className="text-[10px] text-muted">{label}</p>
      <p className={`mt-1 text-sm font-semibold ${accent ? 'text-accent' : 'text-text'}`}>{value}</p>
    </div>
  );
}

function FloatingCard({
  title,
  subtitle,
  className,
  delay = 0,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`animate-[float_5s_ease-in-out_infinite] rounded-xl border border-border bg-card/95 px-3 py-2 shadow-xl backdrop-blur ${className ?? ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="text-xs font-medium text-text">{title}</p>
      {subtitle ? <p className="text-[11px] text-muted">{subtitle}</p> : null}
    </div>
  );
}
