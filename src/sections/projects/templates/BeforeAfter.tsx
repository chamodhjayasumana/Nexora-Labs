import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../../types';
import {
  CursorSpotlight,
  MagneticButton,
  StatusBadge,
} from '../../../components/creative/CreativePrimitives';

interface Props {
  project: Project;
}

export function BeforeAfter({ project }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(52);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, next)));
  };

  return (
    <article
      id={`project-${project.id}`}
      className="group relative overflow-hidden py-20 sm:py-28"
    >
      <CursorSpotlight />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StatusBadge status={project.status} />
        <h3 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-text sm:text-5xl">
          Same Business.
          <br />
          Completely Different Digital Experience.
        </h3>
        <p className="mt-4 max-w-2xl text-muted">
          Drag the slider to compare a traditional contractor website with a digital growth platform.
        </p>

        <div
          ref={containerRef}
          className="relative mt-10 h-[420px] select-none overflow-hidden rounded-3xl border border-border sm:h-[480px]"
          onPointerMove={(e) => {
            if (!dragging.current) return;
            updateFromClientX(e.clientX);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          onPointerLeave={() => {
            dragging.current = false;
          }}
        >
          <div className="absolute inset-0 bg-card p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Digital Growth Platform</p>
            <ul className="mt-6 space-y-3 text-sm text-text sm:text-base">
              {[
                'Instant Estimate',
                'Sticky Call Button',
                'Interactive Services',
                'Automated Follow-Up',
                'Booking CTA',
                'Financing Tool',
              ].map((item) => (
                <li key={item} className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="absolute inset-0 bg-bg-secondary p-6 sm:p-8"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Traditional Contractor Website
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted sm:text-base">
              {[
                'Generic hero image',
                'Small phone number',
                'Static contact page',
                'Long paragraphs',
                'No interaction',
              ].map((item) => (
                <li key={item} className="rounded-xl border border-border bg-card/60 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="absolute inset-y-0 z-10 w-1 bg-accent"
            style={{ left: `${position}%` }}
          >
            <button
              type="button"
              aria-label="Drag comparison slider"
              className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-bg text-accent shadow-lg"
              onPointerDown={(e) => {
                dragging.current = true;
                e.currentTarget.setPointerCapture(e.pointerId);
                updateFromClientX(e.clientX);
              }}
            >
              ↔
            </button>
          </div>
        </div>

        <div className="mt-8">
          <MagneticButton to={`/work/${project.id}`}>Explore Transformation
              <ArrowUpRight className="h-4 w-4" /></MagneticButton>
        </div>
      </div>
    </article>
  );
}
