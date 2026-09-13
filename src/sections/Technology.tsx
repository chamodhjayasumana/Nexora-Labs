import { motion } from 'framer-motion';
import { technologies } from '../data/content';
import { Container, SectionHeading } from '../components/ui';

/**
 * Technology badges are data-driven — update `src/data/content.ts` to change the list.
 */
export function Technology() {
  return (
    <section id="technology" className="bg-bg-secondary/40 py-20 sm:py-24" aria-labelledby="tech-heading">
      <Container>
        <SectionHeading
          title="Modern Technology. Built to Scale."
          description="A modular stack for websites, applications, integrations, and cloud deployment."
          align="center"
        />
        <h2 id="tech-heading" className="sr-only">
          Technology
        </h2>
        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <motion.li
              key={tech.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-text transition hover:border-blue/40"
            >
              {tech.name}
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
