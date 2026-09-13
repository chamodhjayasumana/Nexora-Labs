import { Link } from 'react-router-dom';
import { Container } from '../components/ui';
import { COMPANY } from '../data/company';

export function PrivacyPage() {
  return (
    <section className="py-28 sm:py-32">
      <Container className="max-w-3xl">
        <p className="text-sm text-accent">
          <Link to="/" className="hover:underline">
            ← Back to home
          </Link>
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-text">Privacy Policy</h1>
        <p className="mt-6 leading-relaxed text-muted">
          This is a placeholder privacy policy for {COMPANY.name}. Replace this content with your
          legal counsel–approved policy before launch.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Contact: {COMPANY.email}
        </p>
      </Container>
    </section>
  );
}
