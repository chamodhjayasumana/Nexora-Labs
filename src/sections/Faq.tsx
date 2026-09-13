import { faqs } from '../data/content';
import { Accordion, Container, SectionHeading } from '../components/ui';

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-24" aria-labelledby="faq-heading">
      <Container className="max-w-3xl">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Straightforward answers about websites, automation, and custom development."
          align="center"
        />
        <h2 id="faq-heading" className="sr-only">
          FAQ
        </h2>
        <div className="mt-10">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
