import { motion } from 'framer-motion';
import { focusItems } from '../data/content';
import { Container, SectionHeading } from '../components/ui';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24" aria-labelledby="about-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="Technology Built Around Business Results."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              We are a software development and digital automation company focused on helping
              businesses turn technology into measurable growth.
            </p>
            <p>
              Instead of building static websites, we create digital platforms that combine modern
              user experience, lead-generation strategy, automation, and custom software.
            </p>
            <p>
              Our goal is simple: build technology that makes it easier for your customers to choose
              you.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card p-6 sm:p-8"
        >
          <h3 id="about-heading" className="font-display text-xl font-semibold text-text">
            Our Focus
          </h3>
          <ul className="mt-6 space-y-5">
            {focusItems.map((item, index) => (
              <li key={item.number}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted">
                    {item.number} — {item.title}
                  </span>
                  <span className="text-xs text-accent">{(index + 1) * 25}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-bg-secondary">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-blue"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(index + 1) * 25}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
