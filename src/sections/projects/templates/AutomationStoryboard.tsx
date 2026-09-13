import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../../types';
import {
  CursorSpotlight,
  MagneticButton,
  StatusBadge,
} from '../../../components/creative/CreativePrimitives';

const stages = [
  { title: 'Incoming Call', detail: '11:42 AM' },
  { title: 'No Answer', detail: 'Call missed during a job' },
  { title: '8 Seconds Later', detail: 'Automation triggered' },
  {
    title: 'Automatic SMS',
    detail:
      'Hi Sarah — sorry we missed your call. How can we help with your project?',
    bubble: true,
  },
  { title: 'Customer Replies', detail: 'We need a roof inspection.' },
  { title: 'Lead Created', detail: 'Contact + intent logged' },
  { title: 'Sales Rep Notified', detail: 'Push + SMS alert' },
  { title: 'Appointment Booked', detail: 'Inspection scheduled' },
];

interface Props {
  project: Project;
}

export function AutomationStoryboard({ project }: Props) {
  return (
    <article
      id={`project-${project.id}`}
      className="group relative overflow-hidden py-20 sm:py-28"
    >
      <CursorSpotlight />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <StatusBadge status={project.status} />
        <h3 className="mt-4 font-display text-4xl font-semibold text-text sm:text-5xl">
          What Happens After Nobody Answers?
        </h3>
        <p className="mt-4 text-muted">{project.description}</p>

        <ol className="mt-12 space-y-0">
          {stages.map((stage, index) => (
            <motion.li
              key={stage.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center"
            >
              <div
                className={`w-full rounded-2xl border px-5 py-4 ${
                  stage.bubble
                    ? 'border-accent/40 bg-accent/10'
                    : 'border-border bg-card'
                }`}
              >
                <p className="font-medium text-text">{stage.title}</p>
                <p className={`mt-1 text-sm ${stage.bubble ? 'text-text' : 'text-muted'}`}>
                  {stage.detail}
                </p>
              </div>
              {index < stages.length - 1 ? (
                <ArrowDown className="my-2 h-4 w-4 text-muted" aria-hidden />
              ) : null}
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-success/40 bg-success/10 px-5 py-4 text-success"
        >
          <CheckCircle2 className="h-5 w-5" />
          <span className="font-display text-lg font-semibold tracking-wide">LEAD RECOVERED ✓</span>
        </motion.div>

        <div className="mt-8">
          <MagneticButton to={`/work/${project.id}`}>Watch Workflow
              <ArrowUpRight className="h-4 w-4" /></MagneticButton>
        </div>
      </div>
    </article>
  );
}
