import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';
import { StatusBadge } from '../creative/CreativePrimitives';
import { cn } from '../../utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

/** Compact archive-style card — main showcase uses dedicated templates. */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -4 }}
      className={cn(
        'flex h-full flex-col rounded-2xl border border-border bg-card p-6',
        className,
      )}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <StatusBadge status={project.status} />
        <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
          {project.category}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.features.slice(0, 4).map((feature) => (
          <li
            key={feature}
            className="rounded-lg border border-border bg-bg-secondary px-2.5 py-1 text-xs text-muted"
          >
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={`/work/${project.id}`}
        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent transition hover:text-accent-hover"
      >
        View Case Study
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </motion.article>
  );
}
