import { motion } from 'framer-motion';
import { Check, Calendar, MessageSquare, PhoneMissed, UserRound } from 'lucide-react';
import { Badge, Button, Container } from '../components/ui';
import { COMPANY } from '../data/company';
import { trustIndicators } from '../data/content';

const dashboardCards = [
  {
    icon: UserRound,
    title: 'New Lead',
    lines: ['John D.', 'Roof Replacement', 'Austin, TX'],
    delay: 0.2,
    accent: 'text-accent',
  },
  {
    icon: Check,
    title: 'Instant Estimate',
    lines: ['$12,500 – $16,800'],
    delay: 0.35,
    accent: 'text-blue',
  },
  {
    icon: PhoneMissed,
    title: 'Missed Call Recovered',
    lines: ['SMS Sent ✓'],
    delay: 0.5,
    accent: 'text-success',
  },
  {
    icon: Calendar,
    title: 'New Appointment',
    lines: ['Inspection Booked'],
    delay: 0.65,
    accent: 'text-accent',
  },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-accent/15 blur-[110px]"
        aria-hidden
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Badge variant="blue" className="mb-6 normal-case tracking-normal">
              Web Development • Lead Automation • Digital Growth
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            We Build Digital Systems That Turn{' '}
            <span className="text-gradient">Visitors Into Customers</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            We design high-converting websites, intelligent lead-generation systems, and business
            automation solutions that help service businesses generate more opportunities, respond
            faster, and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href={COMPANY.cta.strategyHref} size="lg">
              {COMPANY.cta.primary}
            </Button>
            <Button href={COMPANY.cta.solutionsHref} variant="secondary" size="lg">
              {COMPANY.cta.secondary}
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
          >
            {trustIndicators.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted">
                <Check className="h-4 w-4 text-success" aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          aria-label="Lead generation dashboard illustration"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue/20 via-transparent to-accent/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/90 p-4 shadow-2xl glow-blue sm:p-5">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">Live Lead System</p>
                <p className="font-display text-lg font-semibold text-text">Growth Dashboard</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs text-success">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                Online
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {dashboardCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: card.delay, duration: 0.45 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl border border-border bg-bg-secondary/80 p-4"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${card.accent}`} aria-hidden />
                      <p className="text-sm font-medium text-text">{card.title}</p>
                    </div>
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-muted">
                        {line}
                      </p>
                    ))}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-bg/60 px-3 py-2 text-xs text-muted"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <MessageSquare className="h-3.5 w-3.5 text-blue" aria-hidden />
              Automated follow-up queue active
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
