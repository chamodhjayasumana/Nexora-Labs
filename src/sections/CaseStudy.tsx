import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { caseStudyFlow } from '../data/content';
import { Badge, Container, SectionHeading } from '../components/ui';

export function CaseStudy() {
  return (
    <section id="case-study" className="py-20 sm:py-24" aria-labelledby="case-study-heading">
      <Container>
        <div className="mb-6">
          <Badge variant="accent">Concept Demonstration</Badge>
        </div>
        <SectionHeading
          title="ApexShield Concept Case Study"
          description="A conversion-focused roofing platform concept for Austin, Texas — designed to show how interactive tools and automation can support local acquisition."
          className="max-w-3xl"
        />
        <h2 id="case-study-heading" className="sr-only">
          ApexShield Case Study
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-text">Problem</h3>
            <p className="mt-3 text-muted leading-relaxed">
              Traditional contractor websites often provide information but don't actively help
              convert high-intent homeowners.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-text">Solution</h3>
            <p className="mt-3 text-muted leading-relaxed">
              A conversion-focused platform combining interactive estimates, mobile CTAs,
              storm-related tools and automated lead follow-up.
            </p>
          </article>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h3 className="mb-6 text-center font-display text-lg font-semibold text-text sm:text-xl">
            Conversion Flow
          </h3>
          <ol className="mx-auto flex max-w-md flex-col items-center">
            {caseStudyFlow.map((step, index) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex w-full flex-col items-center"
              >
                <div className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-center text-sm font-medium text-text sm:text-base">
                  {step}
                </div>
                {index < caseStudyFlow.length - 1 ? (
                  <ArrowDown className="my-2 h-4 w-4 text-accent" aria-hidden />
                ) : null}
              </motion.li>
            ))}
          </ol>
          <p className="mt-6 text-center text-sm text-muted">
            Concept demonstration only. No fabricated performance metrics.
          </p>
        </div>
      </Container>
    </section>
  );
}
