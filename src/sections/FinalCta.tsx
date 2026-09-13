import { motion } from 'framer-motion';
import { COMPANY } from '../data/company';
import { Button, Container } from '../components/ui';

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" aria-labelledby="final-cta-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[100px]" />
        <div className="absolute right-10 top-10 h-52 w-52 rounded-full bg-blue/20 blur-[90px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card/90 px-6 py-14 text-center sm:px-12"
        >
          <h2
            id="final-cta-heading"
            className="mx-auto max-w-3xl font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl"
          >
            Your Website Should Be Your Best Salesperson.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg">
            Let's build a digital system that works for your business 24/7.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={COMPANY.cta.strategyHref} size="lg">
              {COMPANY.cta.primary}
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Tell Us About Your Project
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
