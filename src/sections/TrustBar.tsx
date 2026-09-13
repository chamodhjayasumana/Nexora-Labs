import { motion } from 'framer-motion';
import { metrics } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';
import { Container } from '../components/ui';

function MetricValue({ metric }: { metric: (typeof metrics)[number] }) {
  const shouldAnimate = typeof metric.numericValue === 'number';
  const { value, ref } = useCountUp({
    end: metric.numericValue ?? 0,
    startOnView: shouldAnimate,
  });

  if (!shouldAnimate) {
    return <span className="font-display text-3xl font-semibold text-text sm:text-4xl">{metric.value}</span>;
  }

  return (
    <span ref={ref} className="font-display text-3xl font-semibold text-text sm:text-4xl">
      {metric.prefix}
      {value}
      {metric.suffix}
    </span>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-border bg-bg-secondary/70 py-12 sm:py-14" aria-labelledby="trust-heading">
      <Container>
        <motion.h2
          id="trust-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-2xl font-semibold text-text sm:text-3xl"
        >
          Built to Generate Business — Not Just Look Good.
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-card/60 p-5 text-center"
            >
              <MetricValue metric={metric} />
              <p className="mt-2 text-sm text-muted">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
