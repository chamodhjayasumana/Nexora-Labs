import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../../types';
import { useCountUp } from '../../../hooks/useCountUp';
import {
  CursorSpotlight,
  MagneticButton,
  StatusBadge,
} from '../../../components/creative/CreativePrimitives';

const sources = [
  { name: 'Google Ads', value: 42 },
  { name: 'Google Search', value: 28 },
  { name: 'Website', value: 18 },
  { name: 'Referral', value: 12 },
];

const activity = [
  { time: '10:34 AM', text: 'New HVAC Installation Lead' },
  { time: '10:28 AM', text: 'Estimate Viewed' },
  { time: '10:16 AM', text: 'Missed Call Recovered' },
  { time: '9:52 AM', text: 'Inspection Scheduled' },
];

interface Props {
  project: Project;
}

function Stat({ label, end }: { label: string; end: number }) {
  const { value, ref } = useCountUp({ end });
  return (
    <div className="rounded-2xl border border-border bg-bg-secondary p-4">
      <p className="text-xs text-muted">{label}</p>
      <span ref={ref} className="mt-2 block font-display text-3xl font-semibold text-text">
        {value}
      </span>
    </div>
  );
}

export function CommandCenter({ project }: Props) {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setPulse((p) => (p + 1) % activity.length), 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <article
      id={`project-${project.id}`}
      className="group relative overflow-hidden border-y border-border bg-bg-secondary/40 py-20 sm:py-28"
    >
      <CursorSpotlight />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StatusBadge status={project.status} label="Dashboard Concept" />
        <h3 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-text sm:text-5xl">
          See Your Business Happening in Real Time.
        </h3>
        <p className="mt-4 max-w-2xl text-muted">{project.description}</p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <p className="font-display text-lg font-semibold text-text">Growth Command Center</p>
            <span className="inline-flex items-center gap-1.5 text-xs text-success">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
              Live demo data
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Today's Leads" end={12} />
            <Stat label="Calls" end={8} />
            <Stat label="Estimates" end={5} />
            <Stat label="Appointments" end={3} />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-border bg-bg-secondary p-4">
              <p className="mb-4 text-sm font-medium text-text">Lead Source Breakdown</p>
              <ul className="space-y-3">
                {sources.map((source) => (
                  <li key={source.name}>
                    <div className="mb-1 flex justify-between text-xs text-muted">
                      <span>{source.name}</span>
                      <span>{source.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-bg">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-blue"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${source.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-bg-secondary p-4">
              <p className="mb-4 text-sm font-medium text-text">Live Activity</p>
              <ul className="space-y-3">
                {activity.map((item, index) => (
                  <li
                    key={item.time}
                    className={`rounded-xl border px-3 py-2.5 text-sm transition ${
                      index === pulse
                        ? 'border-accent/40 bg-accent/10 text-text'
                        : 'border-border text-muted'
                    }`}
                  >
                    <span className="mr-2 text-xs text-accent">{item.time}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <MagneticButton to={`/work/${project.id}`}>Explore Dashboard Concept
              <ArrowUpRight className="h-4 w-4" /></MagneticButton>
        </div>
      </div>
    </article>
  );
}
