import { motion } from 'framer-motion';
import { processSteps } from '../data/content';
import { Container, SectionHeading } from '../components/ui';

export function HowWeWork() {
  return (
    <section id="how-it-works" className="bg-bg-secondary/40 py-20 sm:py-24" aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          title="From Idea to Revenue-Ready Platform."
          description="A clear process designed to move from business goals to a launched, measurable digital system."
          className="max-w-3xl"
        />
        <h2 id="process-heading" className="sr-only">
          How We Work
        </h2>

        <ol className="relative mt-14 space-y-6 before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-px before:bg-border sm:before:left-1/2 sm:before:-translate-x-px">
          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                className={`relative grid gap-4 sm:grid-cols-2 sm:gap-10 ${
                  isLeft ? '' : 'sm:[&>*:first-child]:order-2'
                }`}
              >
                <div className={`${isLeft ? 'sm:text-right' : 'sm:text-left'} pl-16 sm:pl-0`}>
                  <div
                    className={`rounded-2xl border border-border bg-card p-5 ${
                      isLeft ? 'sm:ml-auto' : ''
                    } max-w-md`}
                  >
                    <p className="text-sm font-semibold text-accent">{step.number}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-text">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted sm:text-base">{step.description}</p>
                  </div>
                </div>
                <div className="absolute left-[19px] top-5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg sm:left-1/2 sm:-translate-x-1/2" />
                <div className="hidden sm:block" />
              </motion.li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
