import { services } from '../data/services';
import { Container, SectionHeading, ServiceCard } from '../components/ui';

export function Services() {
  return (
    <section id="services" className="bg-bg-secondary/40 py-20 sm:py-24" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          title="Everything You Need to Build a Stronger Digital Sales Engine."
          description="From conversion-focused websites to automation and custom software — systems designed to generate and manage opportunities."
          className="max-w-4xl"
        />
        <h2 id="services-heading" className="sr-only">
          Services
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
