import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../components/ui';

const roiFlow = ['Website Visitor', 'Qualified Lead', 'Appointment', 'Customer'] as const;

export function RoiSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" aria-labelledby="roi-heading">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/20 via-bg to-blue/10" />
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-accent/30 blur-[100px]" />

      <Container className="relative">
        <div className="rounded-3xl border border-accent/30 bg-card/80 p-8 backdrop-blur sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Why Automation Matters
          </p>
          <h2
            id="roi-heading"
            className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            One More Customer Can Change the ROI.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            For high-ticket service businesses, losing one qualified lead can mean losing thousands
            of dollars in potential revenue. We design systems that help businesses capture, respond
            to and manage those opportunities faster.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {roiFlow.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-3"
              >
                <span className="rounded-xl border border-border bg-bg-secondary px-4 py-2.5 text-sm font-medium text-text">
                  {step}
                </span>
                {index < roiFlow.length - 1 ? (
                  <ArrowRight className="hidden h-4 w-4 text-accent sm:block" aria-hidden />
                ) : null}
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Illustration of a conversion path — not a guarantee of revenue outcomes.
          </p>
        </div>
      </Container>
    </section>
  );
}
