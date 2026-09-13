import { motion } from 'framer-motion';
import {
  Briefcase,
  Bolt,
  Cloud,
  Code2,
  Droplets,
  Home,
  MapPinned,
  MonitorSmartphone,
  ShieldAlert,
  Target,
  Thermometer,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { Service } from '../../types';
import { cn } from '../../utils';

const iconMap: Record<string, LucideIcon> = {
  MonitorSmartphone,
  Target,
  Zap,
  Code2,
  MapPinned,
  Cloud,
  Home,
  Thermometer,
  Droplets,
  ShieldAlert,
  Bolt,
  Briefcase,
};

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Zap;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className={cn(
        'group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40',
        className,
      )}
    >
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-secondary text-accent transition group-hover:border-accent/40 group-hover:glow-orange">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <span className="font-display text-sm text-muted">{service.number}</span>
      </div>
      <h3 className="font-display text-xl font-semibold text-text">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{service.description}</p>
      <ul className="mt-5 space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
