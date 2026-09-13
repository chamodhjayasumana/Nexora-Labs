import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../../types';
import {
  CursorSpotlight,
  MagneticButton,
  PhoneFrame,
  StatusBadge,
} from '../../../components/creative/CreativePrimitives';

const journey = [
  '11:48 PM — Customer discovers burst pipe',
  'Searches plumber',
  'Visits website',
  'Clicks Emergency Help',
  'Lead captured',
  'SMS response sent',
  'Technician dispatch requested',
];

interface Props {
  project: Project;
}

export function PhoneExperience({ project }: Props) {
  return (
    <article
      id={`project-${project.id}`}
      className="group relative overflow-hidden py-20 sm:py-28"
    >
      <CursorSpotlight />
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue/20" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-blue/10" />
        <div className="absolute left-[20%] top-[30%] h-40 w-40 rounded-full bg-blue/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <StatusBadge status={project.status} />
          <h3 className="mt-4 font-display text-4xl font-semibold text-text sm:text-5xl">
            Turning Panic Into Action.
          </h3>
          <p className="mt-4 text-muted">
            An emergency conversion experience designed for customers who don't have time to browse.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <ul className="space-y-2">
            {journey.slice(0, 4).map((step, index) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm text-muted"
              >
                {step}
              </motion.li>
            ))}
          </ul>

          <PhoneFrame>
            <div className="relative min-h-[460px] bg-gradient-to-b from-[#0b1a2e] to-[#07111f] p-5 pt-10">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-blue">Emergency Plumbing</p>
              <h4 className="mt-4 text-center font-display text-2xl font-semibold text-text">
                Need Help Now?
              </h4>
              <button
                type="button"
                className="mt-8 w-full rounded-2xl bg-accent py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-accent/30"
              >
                GET HELP NOW
              </button>
              <motion.div
                className="mt-8 rounded-2xl border border-success/30 bg-success/10 p-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              >
                <p className="text-xs text-success">Technician Available</p>
                <p className="mt-1 font-display text-xl font-semibold text-text">ETA: 42 minutes</p>
              </motion.div>
              <p className="mt-6 text-center text-xs text-muted">Concept UI · Demo journey</p>
            </div>
          </PhoneFrame>

          <ul className="space-y-2">
            {journey.slice(4).map((step, index) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm text-muted"
              >
                <span className="mb-1 flex items-center gap-1 text-accent">
                  <ArrowDown className="h-3 w-3" />
                </span>
                {step}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <MagneticButton to={`/work/${project.id}`}>Explore Case Study
              <ArrowUpRight className="h-4 w-4" /></MagneticButton>
        </div>
      </div>
    </article>
  );
}
