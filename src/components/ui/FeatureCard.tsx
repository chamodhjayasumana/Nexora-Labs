import { motion } from 'framer-motion';
import {
  Briefcase,
  Bolt,
  Droplets,
  Home,
  ShieldAlert,
  Thermometer,
  type LucideIcon,
} from 'lucide-react';
import type { Industry } from '../../types';
import { cn } from '../../utils';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Thermometer,
  Droplets,
  ShieldAlert,
  Bolt,
  Briefcase,
};

interface FeatureCardProps {
  item: Industry;
  className?: string;
}

export function FeatureCard({ item, className }: FeatureCardProps) {
  const Icon = iconMap[item.icon] ?? Home;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className={cn(
        'rounded-2xl border border-border bg-card p-6 transition hover:border-blue/40',
        className,
      )}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="font-display text-lg font-semibold text-text">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
    </motion.article>
  );
}
