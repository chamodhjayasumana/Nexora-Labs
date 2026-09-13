import { industries } from '../data/content';
import { Container, FeatureCard, SectionHeading } from '../components/ui';

export function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-24" aria-labelledby="industries-heading">
      <Container>
        <SectionHeading
          title="Built for Businesses Where Every Lead Matters."
          description="Digital systems tailored to high-ticket local service businesses that need faster response and better conversion."
          className="max-w-3xl"
        />
        <h2 id="industries-heading" className="sr-only">
          Industries
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <FeatureCard key={industry.id} item={industry} />
          ))}
        </div>
      </Container>
    </section>
  );
}
