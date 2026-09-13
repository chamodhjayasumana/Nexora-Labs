import { Check, X } from 'lucide-react';
import { growthPlatformPoints, traditionalWebsitePoints } from '../data/content';
import { Container, SectionHeading } from '../components/ui';

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-24" aria-labelledby="why-us-heading">
      <Container>
        <SectionHeading
          title="We Think Beyond the Website."
          description="Compare a traditional brochure site with a digital growth platform built for lead capture and follow-up."
          align="center"
          className="max-w-3xl"
        />
        <h2 id="why-us-heading" className="sr-only">
          Why Choose Us
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-muted">Traditional Website</h3>
            <ul className="mt-6 space-y-3">
              {traditionalWebsitePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-muted">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/10 via-card to-blue/10 p-6 shadow-lg shadow-accent/10 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-text">
              Our Digital Growth Platform
            </h3>
            <ul className="mt-6 space-y-3">
              {growthPlatformPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-text">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
