import { useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../data/company';
import { contactIndustries, projectInterests } from '../data/content';
import type { ContactFormData } from '../types';
import { isValidEmail, isValidPhone } from '../utils';
import { Button, Container, SectionHeading } from '../components/ui';

const initialForm: ContactFormData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  industry: '',
  projectInterest: '',
  message: '',
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

async function submitContactForm(data: ContactFormData): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  void data;
}

function validate(form: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!form.companyName.trim()) errors.companyName = 'Company name is required.';
  if (!isValidEmail(form.email)) errors.email = 'Enter a valid business email.';
  if (!isValidPhone(form.phone)) errors.phone = 'Enter a valid phone number.';
  if (!form.industry) errors.industry = 'Select an industry.';
  if (!form.projectInterest) errors.projectInterest = 'Select a project interest.';
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = 'Please share a bit more about your project.';
  }
  return errors;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm text-red-400">{message}</p>;
}

export function Contact() {
  const [searchParams] = useSearchParams();
  const ideaParam = searchParams.get('idea');
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = ideaParam
    ? Array.from(new Set([ideaParam, ...projectInterests]))
    : [...projectInterests];

  useEffect(() => {
    if (!ideaParam) return;
    setForm((prev) => ({
      ...prev,
      projectInterest: ideaParam,
      message: prev.message.trim()
        ? prev.message
        : `I'm interested in: ${ideaParam}. Let's talk about building this.`,
    }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [ideaParam]);

  const update = <K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await submitContactForm(form);
      setSubmitted(true);
      setForm(initialForm);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-bg-secondary/50 py-20 sm:py-24" aria-labelledby="contact-heading">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            title="Let's Talk About Your Growth System."
            description="Tell us about your business and the digital outcomes you want. We'll follow up to discuss fit and next steps."
          />
          <h2 id="contact-heading" className="sr-only">
            Contact
          </h2>
          <div className="mt-8 space-y-3 text-sm text-muted sm:text-base">
            <p>
              <span className="text-text">Email:</span> {COMPANY.email}
            </p>
            <p>
              <span className="text-text">Phone:</span> {COMPANY.phone}
            </p>
            <p>
              <span className="text-text">Address:</span> {COMPANY.address.line1},{' '}
              {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-start gap-3 py-8">
              <CheckCircle2 className="h-10 w-10 text-success" aria-hidden />
              <h3 className="font-display text-2xl font-semibold text-text">Request received</h3>
              <p className="text-muted">Thanks! We've received your request and will be in touch.</p>
              <Button variant="secondary" onClick={() => setSubmitted(false)}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-sm text-muted">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    value={form.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-text outline-none transition focus:border-accent"
                    autoComplete="name"
                  />
                  <FieldError message={errors.fullName} />
                </div>
                <div>
                  <label htmlFor="companyName" className="mb-1.5 block text-sm text-muted">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    value={form.companyName}
                    onChange={(e) => update('companyName', e.target.value)}
                    className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-text outline-none transition focus:border-accent"
                    autoComplete="organization"
                  />
                  <FieldError message={errors.companyName} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                    Business Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-text outline-none transition focus:border-accent"
                    autoComplete="email"
                  />
                  <FieldError message={errors.email} />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-text outline-none transition focus:border-accent"
                    autoComplete="tel"
                  />
                  <FieldError message={errors.phone} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="industry" className="mb-1.5 block text-sm text-muted">
                    Industry
                  </label>
                  <select
                    id="industry"
                    value={form.industry}
                    onChange={(e) => update('industry', e.target.value)}
                    className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-text outline-none transition focus:border-accent"
                  >
                    <option value="">Select industry</option>
                    {contactIndustries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.industry} />
                </div>
                <div>
                  <label htmlFor="projectInterest" className="mb-1.5 block text-sm text-muted">
                    Project Interest
                  </label>
                  <select
                    id="projectInterest"
                    value={form.projectInterest}
                    onChange={(e) => update('projectInterest', e.target.value)}
                    className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-text outline-none transition focus:border-accent"
                  >
                    <option value="">Select interest</option>
                    {interestOptions.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.projectInterest} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className="w-full resize-y rounded-xl border border-border bg-bg-secondary px-4 py-3 text-text outline-none transition focus:border-accent"
                />
                <FieldError message={errors.message} />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
                {submitting ? 'Sending…' : COMPANY.cta.contact}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
