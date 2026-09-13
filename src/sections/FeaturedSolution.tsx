import { useState } from 'react';
import { motion } from 'framer-motion';
import { solutionCapabilities, targetIndustries } from '../data/content';
import { Button, Container, SectionHeading } from '../components/ui';

export function FeaturedSolution() {
  const [active, setActive] = useState(solutionCapabilities[0]?.id ?? 'estimator');
  const activeCapability =
    solutionCapabilities.find((item) => item.id === active) ?? solutionCapabilities[0];

  return (
    <section id="solutions" className="py-20 sm:py-24" aria-labelledby="solutions-heading">
      <Container>
        <SectionHeading
          eyebrow="Featured Solution"
          title="From Contractor Website to 24/7 Lead Generation Engine."
          description="A specialized home-services platform that combines interactive estimates, mobile conversion actions, and automated follow-up."
          className="max-w-4xl"
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {targetIndustries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted"
            >
              {industry}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-2">
            <h2 id="solutions-heading" className="sr-only">
              Featured Solution Capabilities
            </h2>
            {solutionCapabilities.map((item) => {
              const isActive = item.id === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                    isActive
                      ? 'border-accent/40 bg-accent/10'
                      : 'border-border bg-card hover:border-blue/30'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`font-display text-sm ${isActive ? 'text-accent' : 'text-muted'}`}>
                      {item.number}
                    </span>
                    <div>
                      <p className="font-medium text-text">{item.title}</p>
                      {isActive ? (
                        <p className="mt-1 text-sm text-muted">{item.description}</p>
                      ) : null}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-border bg-card p-3 sm:p-4"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-bg">
              <div className="flex items-center gap-2 border-b border-border bg-bg-secondary px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                <span className="ml-3 truncate text-xs text-muted">
                  yourbusiness.com / lead-system
                </span>
              </div>
              <div className="space-y-4 p-5 sm:p-8">
                <p className="text-xs uppercase tracking-wider text-accent">
                  Capability {activeCapability?.number}
                </p>
                <h3 className="font-display text-2xl font-semibold text-text sm:text-3xl">
                  {activeCapability?.title}
                </h3>
                <p className="max-w-lg text-muted">{activeCapability?.description}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="text-xs text-muted">Visitor Intent</p>
                    <p className="mt-1 font-medium text-text">High</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="text-xs text-muted">Next Action</p>
                    <p className="mt-1 font-medium text-text">Capture & Follow Up</p>
                  </div>
                </div>
                <div className="rounded-xl border border-dashed border-accent/40 bg-accent/5 p-4 text-sm text-muted">
                  Interactive tools turn curiosity into qualified conversations — without relying on
                  a static contact form alone.
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:justify-start">
              <Button href="#demo">See How the System Works</Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
