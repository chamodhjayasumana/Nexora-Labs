import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

export function AiScanner({ project }: Props) {
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    const id = window.setInterval(() => setScanning((v) => !v), 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <article
      id={`project-${project.id}`}
      className="group relative overflow-hidden border-y border-border bg-bg-secondary/30 py-20 sm:py-28"
    >
      <CursorSpotlight />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} label="Innovation Concept" />
          <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            UI Concept / Demonstration
          </span>
        </div>
        <h3 className="font-display text-4xl font-semibold text-text sm:text-5xl">{project.title}</h3>
        <p className="mt-4 max-w-2xl text-muted">{project.description}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-[#050b14] p-4 sm:p-6">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted">Uploaded Roof Photo</p>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#1e293b,#0f172a_45%,#334155)]">
              <div className="absolute inset-8 rounded-xl border border-white/10 bg-white/5" />
              <motion.div
                className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
                animate={{ top: scanning ? ['8%', '88%'] : ['88%', '8%'] }}
                transition={{ duration: 2.4, ease: 'linear', repeat: Infinity }}
              />
              {[
                { top: '28%', left: '30%', label: 'Potential Hail Impact' },
                { top: '48%', left: '58%', label: 'Possible Shingle Damage' },
                { top: '62%', left: '36%', label: 'Inspection Recommended' },
              ].map((marker) => (
                <div
                  key={marker.label}
                  className="absolute"
                  style={{ top: marker.top, left: marker.left }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                  </span>
                  <span className="mt-1 block max-w-[120px] rounded bg-bg/80 px-2 py-1 text-[10px] text-text">
                    {marker.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted">
              Demonstration UI only — not a real AI diagnosis.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-blue">Property Analysis</p>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted">Surface</dt>
                <dd className="font-medium text-text">Architectural Shingle</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted">Potential Damage</dt>
                <dd className="font-medium text-text">3 visual areas detected</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Recommendation</dt>
                <dd className="font-medium text-accent">Professional inspection</dd>
              </div>
            </dl>
            <div className="mt-8">
              <MagneticButton to={`/work/${project.id}`}>See Concept
                  <ArrowUpRight className="h-4 w-4" /></MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
